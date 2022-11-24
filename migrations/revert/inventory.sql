-- Revert idlegame:inventory from pg

BEGIN;

ALTER TABLE "character" 
DROP COLUMN "equipement_id";
DROP TABLE IF EXISTS "equipement";
DROP TABLE IF EXISTS "inventory";


COMMIT;
