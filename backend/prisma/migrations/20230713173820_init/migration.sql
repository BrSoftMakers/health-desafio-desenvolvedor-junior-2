-- CreateEnum
CREATE TYPE "Species" AS ENUM ('dog', 'cat');

-- CreateTable
CREATE TABLE "Pet" (
    "ID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "species" "Species" NOT NULL,
    "breed" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "ownerPhone" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("ID")
);
