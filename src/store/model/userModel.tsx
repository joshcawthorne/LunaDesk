import { action, Action } from "easy-peasy";

export interface UserModel {
  userAvatarUrl: string;
  setUserAvatarUrl: Action<UserModel, string>;
}

const user: UserModel = {
  userAvatarUrl: '',
  setUserAvatarUrl: action((state, payload) => {
    state.userAvatarUrl = payload;
  }),
};

export default user;
