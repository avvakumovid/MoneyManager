import { CategoriesState } from "../types/categoriesTypes";

const initialState: CategoriesState = {
  incomeCategories: [
    {
      name: "Работа",
      type: "Income",
    },
  ],
  expensesCategories: [
    {
      name: "Еда",
      type: "Expenses",
    },
  ],
};

const categoriesReducer = (state = initialState, action): CategoriesState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
