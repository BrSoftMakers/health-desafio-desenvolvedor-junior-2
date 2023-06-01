-- CreateTable
CREATE TABLE "owners" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "animals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "owners_id_key" ON "owners"("id");

-- CreateIndex
CREATE UNIQUE INDEX "animals_id_key" ON "animals"("id");

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "owners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
