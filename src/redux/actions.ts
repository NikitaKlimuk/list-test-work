export enum ActionTypes {
  GET_ALL_USERS = "getAllUsers",
  GET_USER_BY_ID = "getUserById",
}

export interface GetAllUsersAction {
  type: ActionTypes.GET_ALL_USERS;
  payload: any[];
}

export interface GetUserByIdAction {
  type: ActionTypes.GET_USER_BY_ID;
  payload: any;
}

export const getAllUsersAction = (users: any[]): GetAllUsersAction => ({
  type: ActionTypes.GET_ALL_USERS,
  payload: users,
});

export const getUserByIdAction = (user: any): GetUserByIdAction => ({
  type: ActionTypes.GET_USER_BY_ID,
  payload: user,
});
