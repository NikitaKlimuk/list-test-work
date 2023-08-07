import { combineReducers } from "redux";
import { ActionTypes, GetAllUsersAction, GetUserByIdAction } from "./actions";

export interface AppState {
  data: any[];
  selectedUser: any | null;
}

const usersReducer = (
  state: any[] = [],
  action: GetAllUsersAction | GetUserByIdAction
): any[] => {
  switch (action.type) {
    case ActionTypes.GET_ALL_USERS:
      return action.payload;
    case ActionTypes.GET_USER_BY_ID:
      return state;
    default:
      return state;
  }
};

const selectedUserReducer = (
  state: any | null = null,
  action: GetUserByIdAction
): any | null => {
  switch (action.type) {
    case ActionTypes.GET_USER_BY_ID:
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  users: usersReducer,
  selectedUser: selectedUserReducer,
});
