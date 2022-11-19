-- Revert idlegame:inventory from pg

BEGIN;

ALTER TABLE "character" 
DROP COLUMN "equipement_id";
DROP TABLE IF EXISTS "equipement";



COMMIT;
