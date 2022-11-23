-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "nomeDono" TEXT NOT NULL,
    "telefoneDono" TEXT NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);
