"use client"

import useCategoriesSelected from "@/hooks/useCategoriesSelected";
import HeaderComponent from "@/components/HeaderComponent";
import TypesData from "@/components/typesData";
import Style from "./saves.module.css"
import filterPinsByCategory from "@/utils/filterPinsByCategory";
import RecoursesData from "@/assets/db/data.json"
import ListPins from "@/template/listPins";
import categories from "@/assets/db/categories.json"
import getUser from "@/db/getUser";

function SavesPage() {
    const { user } = getUser()
    const { categoriesSelected, editCategory } = useCategoriesSelected()
    const filteredData = filterPinsByCategory(RecoursesData.data, categoriesSelected);
    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <HeaderComponent />
            <section className={Style.headerPage}>
                <h1 className={Style.tittlePage}>Saves Recourses</h1>
            </section>
            {user && <TypesData categories={user.saves} categoriesSelected={categoriesSelected} onClick={editCategory} />}
            <ListPins Pins={filteredData} />
        </main>
    );
}

export default SavesPage;