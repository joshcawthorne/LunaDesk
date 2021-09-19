import { action } from "easy-peasy";

const auth = {
  isLoggedIn: false,
  setIsLoggedIn: action((state, payload) => {
    state.isLoggedIn = payload;
  }),
  userFirstName: "",
  setUserFirstName: action((state, payload) => {
    state.userFirstName = payload;
  }),
  userLastName: "",
  setUserLastName: action((state, payload) => {
    state.userLastName = payload;
  }),
  userEmail: "",
  setUserEmail: action((state, payload) => {
    state.userEmail = payload;
  }),
  userAvatar: "",
  setUserAvatar: action((state, payload) => {
    state.userAvatar = payload;
  }),
  userHasAvatar: false,
  setUserHasAvatar: action((state, payload) => {
    state.userHasAvatar = payload;
  }),
  logOut: action((state, payload) => {
    state.isLoggedIn = false;
    state.userFirstName = "";
    state.userLastName = "";
    state.userEmail = "";
    state.userAvatar = "";
    state.userHasAvatar = false;
  }),
  logIn: action((state, { firstName, lastName, email, avatar, hasAvatar }) => {
    state.isLoggedIn = true;
    state.userFirstName = firstName;
    state.userLastName = lastName;
    state.userEmail = email;
    state.userAvatar = avatar;
    state.userHasAvatar = hasAvatar;
  }),
};

export default auth;
