const { Fight, initFight } = require("../models/fight");
const { Character } = require("../models/character");
const { monsters } = require("../models/monster");
const { Equipement } = require("../models/equipement");

module.exports = (app) => {
  app.post("/api/identity", async (req, res, next) => {
    try {
      const equipement = await Equipement.findByPk(req.session.equipementId);
      console.log("equipement ", equipement);
      console.log("equipement_ID ",req.session.equipementId);
      console.log("session", req.session);
      const character = await Character.findByPk(req.session.characterId);

      const currentFight = await Fight.findOne({
        where: {
          characterId: character.id,
          outcome: "in_progress",
        },
      });

      res.json({
        equipement: equipement,
        character: character,
        currentFight,
        monster: monsters.find((i) => i.id === currentFight.monsterId),
      });
    } catch (err) {
      next(err);
    }
  });

app.post("/api/attack", async (req, res, next) => {
    try {
      
      const character = await Character.findByPk(req.session.characterId);

      const currentFight = await Fight.findOne({
        where: {
          characterId: character.id,
          outcome: "in_progress",
        },
      });

      const monster = monsters.find((i) => i.id === currentFight.monsterId);

      currentFight.monsterHp -= character.strength;
      currentFight.characterHp -= monster.strength;

      if (currentFight.characterHp <= 0) {
        currentFight.outcome = "lost";
        initFight(character);
      } else if (currentFight.monsterHp <= 0) {
        currentFight.outcome = "win";
        // add victory logic
        initFight(character);
        console.log("character", character);
        character.totalMonsterKilled = character.totalMonsterKilled + 1;
        character.save();
      }

      currentFight.save();

      res.json({});
    } catch (err) {
      next(err);
    }
  });
app.post("api/equipement", async (req, res, next) => {
  try {
    
  } catch (error) {
    next(err);
  }
})
};