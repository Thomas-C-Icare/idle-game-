-- Deploy idlegame:inventory to pg

BEGIN;

CREATE TABLE "equipement"
(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "helmet" TEXT UNIQUE,
    "chest" TEXT UNIQUE,
    "legs" TEXT UNIQUE,
    "gloves" TEXT UNIQUE,
    "boots" TEXT UNIQUE,
    "weapon" TEXT UNIQUE,
    "character_id" INT NOT NULL REFERENCES "character" ("id")
);

CREATE TABLE "inventory"
(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "slot" INTEGER
);

ALTER TABLE "character" 
ADD COLUMN "equipement_id" INT REFERENCES "equipement" ("id");

COMMIT;
