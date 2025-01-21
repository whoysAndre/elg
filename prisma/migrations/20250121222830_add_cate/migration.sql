/*
  Warnings:

  - The values [ultimas,exclusivas] on the enum `Type` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('chimpunes', 'exclusivas', 'ultimas');

-- AlterEnum
BEGIN;
CREATE TYPE "Type_new" AS ENUM ('polos', 'pantalones', 'gorras', 'zapatillas', 'deportivas', 'sandalias', 'conjuntos');
ALTER TABLE "Product" ALTER COLUMN "type" TYPE "Type_new" USING ("type"::text::"Type_new");
ALTER TYPE "Type" RENAME TO "Type_old";
ALTER TYPE "Type_new" RENAME TO "Type";
DROP TYPE "Type_old";
COMMIT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" "Category" NOT NULL;
