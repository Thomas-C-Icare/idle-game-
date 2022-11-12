-- Revert idlegame:schema from pg

BEGIN;

drop table if exists "item_character", "fight", "character";

COMMIT;
