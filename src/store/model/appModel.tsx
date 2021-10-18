import { Action, action } from "easy-peasy";

export interface App {
  displayModifyDayStatus: boolean;
  setDisplayModifyDayStatus: Action<App, boolean>;
  displayCompanySettings: boolean;
  setDisplayCompanySettings: Action<App, boolean>;
  displayUserSettings: boolean;
  displayInviteModal: boolean;
  setDisplayUserSettings: Action<App, boolean>;
  setDisplayInviteModal: Action<App, boolean>;
}

const app: App = {
  displayModifyDayStatus: false,
  setDisplayModifyDayStatus: action((state, payload) => {
    state.displayModifyDayStatus = payload;
  }),
  displayCompanySettings: false,
  setDisplayCompanySettings: action((state, payload) => {
    state.displayCompanySettings = payload;
  }),
  displayUserSettings: false,
  setDisplayUserSettings: action((state, payload) => {
    state.displayUserSettings = payload;
  }),
  displayInviteModal: false,
  setDisplayInviteModal: action((state, payload) => {
    state.displayInviteModal = payload;
  }),
};

export default app;
