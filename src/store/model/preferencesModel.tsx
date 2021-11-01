import { action, Action } from "easy-peasy";

export interface PreferencesModel {
  lightMode: boolean;
  setLightMode: Action<PreferencesModel, boolean>;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: Action<PreferencesModel, boolean>
}

const preferences: PreferencesModel = {
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
