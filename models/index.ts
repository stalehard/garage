import Sequelize from "sequelize";
import {  ExamFactory, IExamAttributes, IExamInstance } from "./Exam";
import {  IUserAttributes, IUserInstance, UserFactory } from "./User";

export interface IDbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  User: Sequelize.Model<IUserInstance, IUserAttributes>;
  Exam: Sequelize.Model<IExamInstance, IExamAttributes>;
}

export const createModels = (sequelizeConfig: any): IDbInterface => {
  const { database, username, password, options } = sequelizeConfig;
  const sequelize = new Sequelize(database, username, password, options);

  const db: IDbInterface = {
    sequelize,
    Sequelize,
    User: UserFactory(sequelize, Sequelize),
    Exam: ExamFactory(sequelize, Sequelize),
  };

  // Object.keys(db.model).forEach((modelName) => {
  //   if (db.model[modelName].associate) {
  //     db.model[modelName].associate(db);
  //   }
  // });

  return db;
};
