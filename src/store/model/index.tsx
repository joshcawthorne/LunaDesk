import app, { AppModel } from './appModel';
import auth, { AuthModel } from "./authModel";
import preferences, { PreferencesModel } from "./preferencesModel";
import user, { UserModel } from "./userModel";

export interface StoreModel {
  app: AppModel,
  auth: AuthModel,
  preferences: PreferencesModel,
  user: UserModel,
}

const model: StoreModel = {
  app,
  auth,
  preferences,
  user
};

export default model;
