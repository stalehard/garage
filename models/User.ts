import Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/SequelizeAttributes";

export interface IUserAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserInstance extends Sequelize.Instance<IUserAttributes>, IUserAttributes {}

export const UserFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes):
  Sequelize.Model<IUserInstance, IUserAttributes> => {
  const attributes: SequelizeAttributes<IUserAttributes> = {
    name: {
      type: DataTypes.STRING,
    },
  };

  const User = sequelize.define<IUserInstance, IUserAttributes>("User", attributes);

  return User;
};
