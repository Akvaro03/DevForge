"use client"

import useCategoriesSelected from "@/hooks/useCategoriesSelected";
import HeaderComponent from "@/components/HeaderComponent";
import TypesData from "@/components/typesData";
import Style from "./saves.module.css"
import filterPinsByCategory from "@/utils/filterPinsByCategory";
import ListPins from "@/template/listPins";
import { useMemo } from "react";
import useGetFirebase from "@/hooks/useGetFirebase";

function SavesPage() {
    const { categoriesSelected, editCategory } = useCategoriesSelected()
    const { pins, resetPins } = useGetFirebase()

    const categoriesFiltered = useMemo(() => {
        const filteredCategories: string[] = [];
        if (pins) {
            pins.forEach((data) => {
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
    }, [pins]);

    const formateCategories = useMemo(() =>
        categoriesFiltered.map((categoryName) => ({
            name: categoryName,
        })),
        [categoriesFiltered]
    );

    const pinFiltered = filterPinsByCategory(pins, categoriesSelected);

    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <HeaderComponent />
            <section className={Style.headerPage}>
                <h1 className={Style.tittlePage}>Saves Recourses</h1>
            </section>
            {pins[0] ? (
                <>
                    <TypesData categories={formateCategories} categoriesSelected={categoriesSelected} onClick={editCategory} />
                    <ListPins resetPins={resetPins} Pins={pinFiltered} />
                </>
            ) : (
                <p>{pins.length}</p>
            )}
        </main>
    );
}

export default SavesPage;