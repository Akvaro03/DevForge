"use client"

import useCategoriesSelected from "@/hooks/useCategoriesSelected";
import HeaderComponent from "@/components/HeaderComponent";
import TypesData from "@/components/typesData";
import Style from "./saves.module.css"
import filterPinsByCategory from "@/utils/filterPinsByCategory";
import ListPins from "@/template/listPins";
import getUser from "@/db/getUser";
import { useMemo } from "react";
import { User } from "firebase/auth";
import userType from "@/types/userType";


function SavesPage() {
    const { user }: { user: userType | null } = getUser()
    const { categoriesSelected, editCategory } = useCategoriesSelected()

    const categoriesFiltered = useMemo(() => {
        const filteredCategories: string[] = [];
        if (user?.saves) {
            user.saves.forEach((data) => {
                if (data.categories) {
                    data.categories.forEach((categoryName) => {
                        if (!filteredCategories.includes(categoryName)) {
                            filteredCategories.push(categoryName);
                        }
                    });
                }
            });
        }
        return filteredCategories;
    }, [user]);

    const formateCategories = useMemo(() =>
        categoriesFiltered.map((categoryName) => ({
            name: categoryName,
        })),
        [categoriesFiltered]
    );

    const pinSaves = user?.saves ? user.saves : []
    const pinFiltered = filterPinsByCategory(pinSaves, categoriesSelected);
    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <HeaderComponent />
            <section className={Style.headerPage}>
                <h1 className={Style.tittlePage}>Saves Recourses</h1>
            </section>
            {user && <TypesData categories={formateCategories} categoriesSelected={categoriesSelected} onClick={editCategory} />}
            <ListPins Pins={pinFiltered} />
        </main>
    );
}

export default SavesPage;