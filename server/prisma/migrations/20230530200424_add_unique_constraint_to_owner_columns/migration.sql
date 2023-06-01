/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `owners` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fone]` on the table `owners` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "owners_name_key" ON "owners"("name");

-- CreateIndex
CREATE UNIQUE INDEX "owners_fone_key" ON "owners"("fone");
