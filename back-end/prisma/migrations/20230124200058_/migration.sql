/*
  Warnings:

  - A unique constraint covering the columns `[CPF]` on the table `Owner` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Owner_CPF_key" ON "Owner"("CPF");
