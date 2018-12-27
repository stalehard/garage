import Sequelize from "sequelize";
import { IExamAttributes, IExamInstance } from "./Exam";
import { SequelizeAttributes } from "./index";

export interface IUserAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  exams?: IExamAttributes[] | Array<IExamAttributes["id"]>;
}

export interface IUserInstance extends Sequelize.Instance<IUserAttributes>, IUserAttributes {
  getExams: Sequelize.HasManyGetAssociationsMixin<IExamInstance>;
  setExams: Sequelize.HasManySetAssociationsMixin<IExamInstance, IExamInstance["id"]>;
  addExams: Sequelize.HasManyAddAssociationsMixin<IExamInstance, IExamInstance["id"]>;
  addExam: Sequelize.HasManyAddAssociationMixin<IExamInstance, IExamInstance["id"]>;
  createExam: Sequelize.HasManyCreateAssociationMixin<IExamAttributes, IExamInstance>;
  removeExam: Sequelize.HasManyRemoveAssociationMixin<IExamInstance, IExamInstance["id"]>;
  removeExams: Sequelize.HasManyRemoveAssociationsMixin<IExamInstance, IExamInstance["id"]>;
  hasExam: Sequelize.HasManyHasAssociationMixin<IExamInstance, IExamInstance["id"]>;
  hasExams: Sequelize.HasManyHasAssociationsMixin<IExamInstance, IExamInstance["id"]>;
  countExams: Sequelize.HasManyCountAssociationsMixin;
}

export const UserFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes):
  Sequelize.Model<IUserInstance, IUserAttributes> => {
  const attributes: SequelizeAttributes<IUserAttributes> = {
    name: {
      type: DataTypes.STRING,
    },
  };

  const User = sequelize.define<IUserInstance, IUserAttributes>("user", attributes, {
    timestamps: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Exam, { foreignKey: "userId", as: "exams" });
  };

  return User;
};
