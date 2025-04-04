/*
  Warnings:

  - The values [deportivas] on the enum `Type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
ALTER TYPE "Category" ADD VALUE 'deportivas';

-- AlterEnum
BEGIN;
CREATE TYPE "Type_new" AS ENUM ('polos', 'pantalones', 'gorras', 'zapatillas', 'sandalias', 'conjuntos');
ALTER TABLE "Product" ALTER COLUMN "type" TYPE "Type_new" USING ("type"::text::"Type_new");
ALTER TYPE "Type" RENAME TO "Type_old";
ALTER TYPE "Type_new" RENAME TO "Type";
DROP TYPE "Type_old";
COMMIT;
