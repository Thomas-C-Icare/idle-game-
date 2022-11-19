const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database");
const { Character } = require("./character");

// Option 1: Passing a connection URI
class Equipement extends Model {}

Equipement.init(
  {
    helmet: {
      type: DataTypes.INTEGER,
    },
    chest: {
      type: DataTypes.INTEGER,
    },
    legs: {
      type: DataTypes.INTEGER,
    },
    gloves: {
      type: DataTypes.INTEGER,
    },
    boots: {
      type: DataTypes.INTEGER,
    },
    weapon: {
      type: DataTypes.INTEGER,
    },
    character_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  },
  {
    // deuxième argument et deuxième objet de init : le lien avec la BDD
    sequelize: sequelize, // la BDD concernée
    tableName: "equipement", // la table concernée
    modelName: "Equipement",
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

    // If don't want createdAt
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
  }
);

module.exports = { Equipement };
