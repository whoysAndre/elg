-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('hombre', 'nino', 'mujer', 'unisex');

-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('nike', 'adidas', 'puma', 'reebok', 'jordan');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('polos', 'pantalones', 'gorras', 'zapatillas', 'sandalias', 'conjuntos');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "images" TEXT[],
    "inStock" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "sizes" TEXT[],
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "brand" "Brand" NOT NULL,
    "gender" "Gender" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
