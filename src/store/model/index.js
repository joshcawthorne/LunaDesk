import appModel from "./appModel";
import authModel from "./authModel";
import preferencesModel from "./preferencesModel";

const globalModel = {
  app: appModel,
  auth: authModel,
  preferences: preferencesModel,
};

export default globalModel;
