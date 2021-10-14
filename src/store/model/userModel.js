import { action } from "easy-peasy";

const user = {
  userAvatarUrl: false,
  setUserAvatarUrl: action((state, payload) => {
    state.userAvatarUrl = payload;
  }),
};

export default user;
