import { useCallback, useState } from "react";

function useCategoriesSelected() {
    const [categoriesSelected, setCategoriesSelected] = useState<string[]>([])

    const editCategory = useCallback((name: string) => {
        setCategoriesSelected(prev =>
            prev.includes(name) ?
                prev.filter(cat => cat !== name) :
                [...prev, name]);
    }, []);
 

    return { categoriesSelected, editCategory }

}

export default useCategoriesSelected;