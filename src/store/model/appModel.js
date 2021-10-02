import { action } from "easy-peasy";

const app = {
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
