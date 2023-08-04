import { combineReducers } from "redux";
import { ActionTypes, GetAllUsersAction } from "./actions";

export interface AppState {
  data: any[];
}

const usersReducer = (state: any[] = [], action: GetAllUsersAction): any[] => {
  switch (action.type) {
    case ActionTypes.GET_ALL_USERS:
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  users: usersReducer,
});
