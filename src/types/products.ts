export type ValidTypes = 'polos' | 'pantalones' | 'gorros' | 'zapatillas' | 'deportivas' | 'conjuntos' | 'ultimas' | 'exclusivas';
export type ValidBrands = 'Nike' | 'Adidas' | 'Jordan' | 'Reebok';

export interface Product {
    images: string[];
    stock: number;
    price: number;
    sizes: string[];
    slug: string;
    title: string;
    type: ValidTypes;
    gender: 'hombre' | 'mujer' | 'nino' | 'unisex';
    brand: ValidBrands;
}

export interface Filters {
    types: ValidTypes[];
    brands: ValidBrands[];
}

export interface OtherProduct {
    images: string[];
    stock: number;
    price: number;
    sizes: string[];
    slug: string;
    title: string;
    type: string;
    gender: string;
    brand: string;
    code: string;
}