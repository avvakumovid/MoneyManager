export type IncomeCategories = {
  name: string;
  type: "Income";
};

export type ExpensesCategories = {
  name: string;
  type: "Expenses";
};

export interface CategoriesState {
  incomeCategories: IncomeCategories[];
  expensesCategories: ExpensesCategories[];
}

export enum CategoriesActionTypes {}

// export type CategoriesAction = CategoriesActionTypes;
