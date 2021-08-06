import { action } from "easy-peasy";

const app = {
  displayModifyDayStatus: false,
  setDisplayModifyDayStatus: action((state, payload) => {
    state.displayModifyDayStatus = payload;
  }),
};

export default app;
