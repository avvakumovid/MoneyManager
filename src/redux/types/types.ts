import { ExpensesCategories, IncomeCategories } from "./categoriesTypes";

export type Transaction = {
  name: string;
  date: Date;
  summa: number;
  description: string;
  categories: IncomeCategories | ExpensesCategories;
};



export interface State {
  totalMoney: number;
  transactions: Transaction[];
}


export enum ActionTypes {
  ADD_TRANSACTION = "ADD_TRANSACTION",
  CREATE_TRANSACTION = "CREATE_TRANSACTION",
}

interface CreateTransaction {
  type: ActionTypes.CREATE_TRANSACTION;
  transactions: Transaction;
}

export type Action = CreateTransaction;
