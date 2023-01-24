-- CreateEnum
CREATE TYPE "Type" AS ENUM ('GATO', 'CACHORRO');

-- CreateTable
CREATE TABLE "pets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "type" "Type" NOT NULL,
    "breed" TEXT NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);
