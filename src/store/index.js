import { createStore } from "easy-peasy";
import storeModel from "./model";

const store = createStore(storeModel);

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("./model/", () => {
      store.reconfigure(model);
    });
  }
}

export default store;
