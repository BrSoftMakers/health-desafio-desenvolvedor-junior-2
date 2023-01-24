/*
  Warnings:

  - Added the required column `CPF` to the `Owner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Owner" ADD COLUMN     "CPF" VARCHAR(11) NOT NULL;
