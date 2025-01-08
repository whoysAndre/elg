export interface SeedProduct {
    images: string[];
    inStock: number;
    price: number;
    sizes: string[];
    slug: string;
    title: string;
    type: ValidTypes;
    brand: ValidBrands;
    gender: 'hombre' | 'mujer' | 'nino' | 'unisex' 
}

type ValidBrands = 'Nike' | 'Adidas' | 'Jordan';
type ValidTypes = 'polos' | 'pantalones' | 'gorros' | 'zapatillas' | 'deportivas' | 'conjuntos' | 'ultimas' | 'exclusivas';

interface SeedData {
    products: SeedProduct[],
}

export const initialData: SeedData = {
    products: [
        {
            "images": [
                "adidas-polo1.jpg"
            ],
            "inStock": 7,
            "price": 140,
            "sizes": ["S"],
            "slug": "adidas_polo_1",
            "type": "polos",
            "title": "Polo Adidas Blank",
            "gender": "mujer",
            "brand": "Adidas"
        },
        {
            "images": [
                "adidas-stand.avif"
            ],
            "inStock": 7,
            "price": 220,
            "sizes": ["42.5","43"],
            "slug": "adidas_stand_azul",
            "type": "zapatillas",
            "title": "Adidas Stand Smith Azul",
            "gender": "hombre",
            "brand": "Adidas"
        },
        {
            "images": [
                "adidas-stand2.avif"
            ],
            "inStock": 7,
            "price": 220,
            "sizes": ["42.5","43"],
            "slug": "adidas_stand_negro",
            "type": "zapatillas",
            "title": "Adidas Stand Smith Negro",
            "gender": "hombre",
            "brand": "Adidas"
        },
        {
            "images": [
                "air-force-negro.webp"
            ],
            "inStock": 2,
            "price": 520,
            "sizes": ["41","42"],
            "slug": "nike_airforce_negro",
            "type": "exclusivas",
            "title": "Nike AirForce Negro",
            "gender": "hombre",
            "brand": "Nike"
        },
        {
            "images": [
                "air-force-blanco.webp"
            ],
            "inStock": 1,
            "price": 520,
            "sizes": ["41","42"],
            "slug": "nike_airforce_blanco",
            "type": "exclusivas",
            "title": "Nike AirForce Blanco",
            "gender": "nino",
            "brand": "Nike"
        },
        {
            "images": [
                "gorra-nike.png"
            ],
            "inStock": 1,
            "price": 80,
            "sizes": [],
            "slug": "gorra_nike",
            "type": "gorros",
            "title": "Gorra Nike transversal",
            "gender": "hombre",
            "brand": "Nike"
        },
        {
            "images": [
                "jordan-1.webp"
            ],
            "inStock": 4,
            "price": 620,
            "sizes": ["41","42"],
            "slug": "jordan_exclusive_webp",
            "type": "exclusivas",
            "title": "Jordan Reveal Exclusive",
            "gender": "hombre",
            "brand": "Jordan"
        },

    ]
}