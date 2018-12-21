import Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/SequelizeAttributes";

export interface IExamAttributes {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IExamInstance extends Sequelize.Instance<IExamAttributes>, IExamAttributes {}

export const ExamFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes):
  Sequelize.Model<IExamInstance, IExamAttributes> => {
  const attributes: SequelizeAttributes<IExamAttributes> = {};

  const Exam = sequelize.define<IExamInstance, IExamAttributes>("Exam", attributes);

  return Exam;
};
