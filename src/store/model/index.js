import appModel from "./appModel";
import authModel from "./authModel";
import preferencesModel from "./preferencesModel";
import userModel from "./userModel";

const globalModel = {
  app: appModel,
  auth: authModel,
  preferences: preferencesModel,
  user: userModel,
};

export default globalModel;
