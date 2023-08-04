export enum ActionTypes {
  GET_ALL_USERS = "getAllUsers",
}

export interface GetAllUsersAction {
  type: ActionTypes.GET_ALL_USERS;
  payload: any[];
}

export const getAllUsersAction = (users: any[]): GetAllUsersAction => ({
  type: ActionTypes.GET_ALL_USERS,
  payload: users,
});
