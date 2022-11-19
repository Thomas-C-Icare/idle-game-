-- Verify idlegame:inventory on pg

BEGIN;

SELECT "id",
    "helmet",
    "chest",
    "legs",
    "gloves",
    "boots",
    "weapon", 
    "character_id"
FROM "equipement" WHERE false;

SELECT "equipement_id"
FROM "character" WHERE false;

ROLLBACK;
