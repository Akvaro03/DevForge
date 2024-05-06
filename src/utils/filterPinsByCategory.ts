import recourseType from "@/types/recourseType";

function filterPinsByCategory(data: recourseType[], categoriesSelected: string[]) {
    if (categoriesSelected.length === 0) return data;
    return data.filter(item => item.categories.some(cat => categoriesSelected.includes(cat)));
}

export default filterPinsByCategory;