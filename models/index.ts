import Sequelize from "sequelize";
import {  IUserAttributes, IUserInstance, UserFactory } from "./User";

export interface IDbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  User: Sequelize.Model<IUserInstance, IUserAttributes>;
}

export const createModels = (sequelizeConfig: any): IDbInterface => {
  const { database, username, password, options } = sequelizeConfig;
  const sequelize = new Sequelize(database, username, password, options);

  const db: IDbInterface = {
    sequelize,
    Sequelize,
    User: UserFactory(sequelize, Sequelize),
  };

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db;
};
