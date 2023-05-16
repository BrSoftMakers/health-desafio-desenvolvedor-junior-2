-- CreateEnum
CREATE TYPE "TypePet" AS ENUM ('gato', 'cachorro');

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "type" "TypePet" NOT NULL,
    "petOwner" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);
