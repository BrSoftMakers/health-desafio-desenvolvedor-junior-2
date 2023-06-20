-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "specie" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "owner_name" TEXT NOT NULL,
    "owner_tel" TEXT NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);
