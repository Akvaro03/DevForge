"use client"

import useCategoriesSelected from "@/hooks/useCategoriesSelected";
import HeaderComponent from "@/components/HeaderComponent";
import TypesData from "@/components/typesData";
import Style from "./saves.module.css"
import filterPinsByCategory from "@/utils/filterPinsByCategory";
import ListPins from "@/template/listPins";
import getUser from "@/db/getUser";


function SavesPage() {
    const { user } = getUser()
    const { categoriesSelected, editCategory } = useCategoriesSelected()

    const savesUser = user?.saves ? user.saves : []

    const filteredData = filterPinsByCategory(savesUser, categoriesSelected);

    const categoriesUser = user?.saves
        .map(data => data.categories)?.flat()
        .map(category => ({ name: category }))

    const categoriesaaa = categoriesUser ? categoriesUser : []

    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <HeaderComponent />
            <section className={Style.headerPage}>
                <h1 className={Style.tittlePage}>Saves Recourses</h1>
            </section>
            {user && <TypesData categories={categoriesaaa} categoriesSelected={categoriesSelected} onClick={editCategory} />}
            <ListPins Pins={filteredData} />
        </main>
    );
}

export default SavesPage;