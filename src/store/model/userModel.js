import { action } from "easy-peasy";

const user = {
  loggedIn: false,
  setLoggedIn: action((state, payload) => {
    state.loggedIn = payload;
  }),

  session: null,
  setSession: action((state, payload) => {
    state.session = payload;
  }),

  id: null,
  setId: action((state, payload) => {
    state.id = payload;
  }),

  fullName: null,
  setFullName: action((state, payload) => {
    state.fullName = payload;
  }),

  email: null,
  setEmail: action((state, payload) => {
    state.email = payload;
  }),

  company: null,
  setCompany: action((state, payload) => {
    state.company = payload;
  }),

  onboarded: false,
  setOnboarded: action((state, payload) => {
    state.onboarded = payload;
  }),

  avatar: null,
  setAvatar: action((state, payload) => {
    state.avatar = payload;
  }),

  setUserDetails: action(
    (state, { id, fullName, email, company, onboarded, avatar }) => {
      state.id = id;
      state.fullName = fullName;
      state.email = email;
      state.company = company;
      state.onboarded = onboarded;
      state.avatar = avatar;
    }
  ),
};

export default user;
