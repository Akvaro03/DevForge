"use client";

import useCategoriesSelected from "@/hooks/useCategoriesSelected";
import HeaderComponent from "@/components/HeaderComponent";
import TypesData from "@/components/typesData";
import Style from "./saves.module.css";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import filterPinsByCategory from "@/utils/filterPinsByCategory";
import ListPins from "@/template/listPins";
import { useMemo } from "react";
import { useGlobalContext } from "../context/store";
import CustomBottom from "@/components/customBottom";

function SavesPage() {
  const { categoriesSelected, editCategory, clearCategories } =
    useCategoriesSelected();
  const { pinSave } = useGlobalContext();

  const categoriesFiltered = useMemo(() => {
    const filteredCategories: string[] = [];
    if (pinSave) {
      pinSave.forEach((data) => {
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
  }, [pinSave]);

  const formateCategories = useMemo(
    () =>
      categoriesFiltered.map((categoryName) => ({
        name: categoryName,
      })),
    [categoriesFiltered]
  );

  const pinFiltered = filterPinsByCategory(pinSave, categoriesSelected);

  return (
    <main className="dark flex min-h-screen flex-col items-center py-8">
      <HeaderComponent />
      {pinSave && pinSave[0] ? (
        <>
          <section className={Style.headerPage}>
            <h1 className={Style.tittlePage}>Saves Recourses</h1>
            {categoriesSelected[0] && (
              <CustomBottom
                isCircle
                toolTip="Clean Filters"
                onClick={clearCategories}
                icon={<FilterAltOffIcon />}
              />
            )}
          </section>
          <TypesData
            categories={formateCategories}
            categoriesSelected={categoriesSelected}
            onClick={editCategory}
          />
          <ListPins Pins={pinFiltered} />
        </>
      ) : (
        <div className="flex items-center justify-center h-[50vh]">
          <p>There are no saved resources</p>
        </div>
      )}
    </main>
  );
}

export default SavesPage;
