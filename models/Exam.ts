import Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/SequelizeAttributes";
import { IUserAttributes, IUserInstance } from "./User";

export interface IExamAttributes {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  user?: IUserAttributes | IUserAttributes["id"];
}

export interface IExamInstance extends Sequelize.Instance<IExamAttributes>, IExamAttributes {}

export const ExamFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes):
  Sequelize.Model<IExamInstance, IExamAttributes> => {
  const attributes: SequelizeAttributes<IExamAttributes> = {};

  const Exam = sequelize.define<IExamInstance, IExamAttributes>("Exam", attributes);

  Exam.associate = (models) => {
    Exam.belongsTo(models.User, { as: "user", foreignKey: "userId" });
  };

  return Exam;
};