-- Revert idlegame:schema from pg

BEGIN;

DROP TABLE IF EXISTS "item_character", "fight", "character";

COMMIT;
