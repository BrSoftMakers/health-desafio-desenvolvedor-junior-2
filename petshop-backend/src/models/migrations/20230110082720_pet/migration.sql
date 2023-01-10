-- CreateTable
CREATE TABLE "pet" (
    "Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" TEXT,
    "animal" TEXT NOT NULL,
    "race" TEXT,
    "ownerName" TEXT NOT NULL,
    "tel" TEXT NOT NULL,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("Id")
);
