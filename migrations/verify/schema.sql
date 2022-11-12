-- Verify idlegame:schema on pg

BEGIN;

SELECT "name",
    "level",
    "experience",
    "strength",
    "attack_speed",
    "hit_points",
    "stage",
    "total_monster_killed",
    "highest_monster_killed"  
FROM "character" WHERE false;

SELECT 
    "id",
    "item_id",
    "character_id",
    "position"
FROM "item_character" WHERE false;

SELECT "id",
    "character_id",
    "monster_id",
    "date",
    "outcome",
    "character_hp",
    "monster_hp" 
FROM "fight" WHERE false;
    
ROLLBACK;
