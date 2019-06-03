import Sequelize, {
  DataTypeAbstract,
  DefineAttributeColumnOptions,
} from "sequelize";
import { ExamFactory, IExamAttributes, IExamInstance } from "./Exam";
import { IUserAttributes, IUserInstance, UserFactory } from "./User";

type SequelizeAttribute =
  | string
  | DataTypeAbstract
  | DefineAttributeColumnOptions;

export type SequelizeAttributes<T extends { [key: string]: any }> = {
  [P in keyof T]: SequelizeAttribute
};

export interface IDbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  models: {
    User: Sequelize.Model<IUserInstance, IUserAttributes>;
    Exam: Sequelize.Model<IExamInstance, IExamAttributes>;
    [propName: string]: any;
  };
}

export const createModels = (sequelizeConfig: any): IDbInterface => {
  const { database, username, password, options } = sequelizeConfig;
  const sequelize = new Sequelize(database, username, password, options);

  const db: IDbInterface = {
    sequelize,
    Sequelize,
    models: {
      User: UserFactory(sequelize, Sequelize),
      Exam: ExamFactory(sequelize, Sequelize),
    },
  };

  Object.keys(db.models).forEach((modelName) => {
    if (db.models[modelName].associate) {
      db.models[modelName].associate(db.models);
    }
  });

  return db;
};
