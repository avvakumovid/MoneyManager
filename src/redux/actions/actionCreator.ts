import { Dispatch } from "react";
import { Action, ActionTypes, Transaction } from "../types/types";

const createTransaction = ({
  categories,
  description,
  summa,
  name,
  date,
}: Transaction) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.CREATE_TRANSACTION,
      transactions: { categories, date, description, name, summa },
    });
  };
};

export default {
  createTransaction,
};
