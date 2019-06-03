import Sequelize from "sequelize";
import { SequelizeAttributes } from "./index";
import { IUserAttributes, IUserInstance } from "./User";

export interface IExamAttributes {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  user?: IUserAttributes | IUserAttributes["id"];
}

export interface IExamInstance
  extends Sequelize.Instance<IExamAttributes>,
    IExamAttributes {
  user?: IUserInstance;
}

export const ExamFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes,
): Sequelize.Model<IExamInstance, IExamAttributes> => {
  const attributes: SequelizeAttributes<IExamAttributes> = {};

  const Exam = sequelize.define<IExamInstance, IExamAttributes>(
    "exam",
    attributes,
    {
      timestamps: true,
    },
  );

  Exam.associate = (models) => {
    Exam.belongsTo(models.User, { as: "user", foreignKey: "userId" });
  };

  return Exam;
};
