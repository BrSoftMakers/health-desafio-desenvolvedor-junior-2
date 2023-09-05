import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

class PetModel extends Model {}

PetModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    petName: {
      type: DataTypes.STRING,
    },
    petAge: {
      type: DataTypes.INTEGER,
    },
    petType: {
      type: DataTypes.ENUM("gato", "cachorro"),
    },
    petBreed: {
      type: DataTypes.STRING,
    },
    petOwner: {
      type: DataTypes.STRING,
    },
    petOwnerPhone: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Pets",
    timestamps: true,
    sequelize,
  }
);

export default PetModel;
