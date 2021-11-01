import { action, Action } from "easy-peasy";

export interface AppModel {
  displayModifyDayStatus: boolean;
  setDisplayModifyDayStatus: Action<AppModel, boolean>;
  displayCompanySettings: boolean;
  setDisplayCompanySettings: Action<AppModel, boolean>;
  displayUserSettings: boolean;
  displayInviteModal: boolean;
  setDisplayUserSettings: Action<AppModel, boolean>;
  setDisplayInviteModal: Action<AppModel, boolean>;
}

const app: AppModel = {
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




