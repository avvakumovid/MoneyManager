import { Action, ActionTypes, State } from "../types/types";

const initialState: State = {
  totalMoney: 222,
  transactions: [],
  
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CREATE_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.transactions],
      };
    default:
      return state;
  }
};

export default reducer;
