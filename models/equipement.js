const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database");
const { Character, initCharacter } = require("./character");


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
    characterId: {
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

const initEquipement = (character) => {
  console.log('character', character)
  const equipement = Equipement.build({
    helmet: null,
    chest: null,
    legs: null,
    gloves: null,
    boots: null,
    weapon: null,
    characterId: character.id,
  });

  equipement.save();
  
  return equipement;
}

module.exports = { Equipement, initEquipement };
