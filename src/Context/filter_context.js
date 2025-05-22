import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initalState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initalState);

    // to set the grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    }

    // to set the List view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    }

    // sorting function
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    };

    // to sort the product
    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS", payload: products });
    }, [state.sorting_value]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};