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
};

export default app;
