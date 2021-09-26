import { action } from "easy-peasy";

const preferences = {
  lightMode: false,
  setLightMode: action((state, payload) => {
    state.lightMode = payload;
  }),
  sidebarCollapsed: false,
  setSidebarCollapsed: action((state, payload) => {
    state.sidebarCollapsed = payload;
  }),
};

export default preferences;
