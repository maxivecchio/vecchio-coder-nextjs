const products = [
  {
    "id": 2,
    "name": "Elegant Suit",
    "price": 150.0,
    "discountPrice": 180.5,
    "rating": 4.8,
    "reviews": 120,
    "imageSrc": "/images/products/product1.jpg",
    "availability": true,
    "brand": "Elegance",
    "category": "Trajes para Hombres",
    "sku": "EH150BLK",
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["#000", "#35424a", "#c0c0c0"],
    "description": "A classic and elegant suit for men. Perfect for formal occasions and business events.",
    "weight": "2.5 kg",
    "material": "Wool Blend"
  },
  {
    "id": 3,
    "name": "Modern Slim Fit Suit",
    "price": 180.0,
    "discountPrice": 200.0,
    "rating": 4.5,
    "reviews": 90,
    "imageSrc": "/images/products/product2.jpg",
    "availability": true,
    "brand": "StylishWear",
    "category": "Trajes para Hombres",
    "sku": "SW180GRY",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["#333", "#555", "#ddd"],
    "description": "A modern and slim fit suit for the fashionable man. Ideal for weddings and special events.",
    "weight": "2.0 kg",
    "material": "Polyester Blend"
  },
  {
    "id": 4,
    "name": "Classic Tuxedo",
    "price": 200.0,
    "discountPrice": 220.0,
    "rating": 4.9,
    "reviews": 150,
    "imageSrc": "/images/products/product3.jpg",
    "availability": true,
    "brand": "ClassicSuits",
    "category": "Trajes para Hombres",
    "sku": "CS200BLK",
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["#000", "#fff", "#ff4500"],
    "description": "A timeless classic tuxedo for the sophisticated man. Perfect for black-tie events.",
    "weight": "2.8 kg",
    "material": "Silk and Wool"
  },
  {
    "id": 5,
    "name": "Elegant Evening Gown",
    "price": 120.0,
    "discountPrice": 140.0,
    "rating": 4.7,
    "reviews": 110,
    "imageSrc": "/images/products/product4.jpg",
    "availability": true,
    "brand": "FemmeChic",
    "category": "Vestidos Formales para Mujeres",
    "sku": "FC120BLU",
    "sizes": ["XS", "S", "M", "L"],
    "colors": ["#4169e1", "#fff", "#ff69b4"],
    "description": "An elegant evening gown for the modern woman. Perfect for formal events and parties.",
    "weight": "1.5 kg",
    "material": "Satin and Lace"
  },
  {
    "id": 6,
    "name": "Floral Cocktail Dress",
    "price": 90.0,
    "discountPrice": 100.0,
    "rating": 4.6,
    "reviews": 80,
    "imageSrc": "/images/products/product5.jpg",
    "availability": true,
    "brand": "BlossomStyle",
    "category": "Vestidos Formales para Mujeres",
    "sku": "BS90RED",
    "sizes": ["S", "M", "L"],
    "colors": ["#ff0000", "#008000", "#ffd700"],
    "description": "A vibrant floral cocktail dress for a stylish and chic look. Suitable for various occasions.",
    "weight": "1.2 kg",
    "material": "Chiffon"
  },
  {
    "id": 7,
    "name": "Classic Black Dress",
    "price": 150.0,
    "discountPrice": 180.0,
    "rating": 4.8,
    "reviews": 120,
    "imageSrc": "/images/products/product6.jpg",
    "availability": true,
    "brand": "TimelessFashion",
    "category": "Vestidos Formales para Mujeres",
    "sku": "TF150BLK",
    "sizes": ["M", "L", "XL"],
    "colors": ["#000", "#fff", "#808080"],
    "description": "A classic black dress for a timeless and sophisticated look. Suitable for formal occasions.",
    "weight": "1.7 kg",
    "material": "Crepe"
  },
  {
    "id": 8,
    "name": "Silk Tie Set",
    "price": 30.0,
    "discountPrice": 35.0,
    "rating": 4.5,
    "reviews": 95,
    "imageSrc": "/images/products/product7.jpg",
    "availability": true,
    "brand": "AccessoStyle",
    "category": "Accesorios para Trajes",
    "sku": "AS30MIX",
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["#336699", "#cc0000", "#ffd700"],
    "description": "A set of luxurious silk ties in various colors. Perfect for adding elegance to your suit.",
    "weight": "0.2 kg",
    "material": "Silk"
  },
  {
    "id": 9,
    "name": "Leather Belt and Wallet Combo",
    "price": 40.0,
    "discountPrice": 45.0,
    "rating": 4.6,
    "reviews": 85,
    "imageSrc": "/images/products/product8.jpg",
    "availability": true,
    "brand": "LeatherCraft",
    "category": "Accesorios para Trajes",
    "sku": "LC40BRN",
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["#8b4513", "#000", "#fff"],
    "description": "A stylish combo of a genuine leather belt and matching wallet. Ideal for a polished look.",
    "weight": "0.5 kg",
    "material": "Genuine Leather"
  },
  {
    "id": 10,
    "name": "Cufflink Collection",
    "price": 25.0,
    "discountPrice": 28.0,
    "rating": 4.4,
    "reviews": 75,
    "imageSrc": "/images/products/product10.jpg",
    "availability": true,
    "brand": "DapperAccessories",
    "category": "Accesorios para Trajes",
    "sku": "DA25SIL",
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["#c0c0c0", "#333", "#ffcc00"],
    "description": "A set of stylish cufflinks to add a touch of sophistication to your formal attire.",
    "weight": "0.1 kg",
    "material": "Stainless Steel"
  },
  {
    "id": 11,
    "name": "Chic Business Suit",
    "price": 160.0,
    "discountPrice": 190.0,
    "rating": 4.7,
    "reviews": 110,
    "imageSrc": "/images/products/product11.jpg",
    "availability": true,
    "brand": "FemmeClass",
    "category": "Ropa Formal para Mujeres",
    "sku": "FC160GRY",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["#808080", "#fff", "#d2691e"],
    "description": "A chic and sophisticated business suit for the modern professional woman.",
    "weight": "1.8 kg",
    "material": "Polyester Blend"
  },
  {
    "id": 12,
    "name": "Elegant Cocktail Jumpsuit",
    "price": 120.0,
    "discountPrice": 140.0,
    "rating": 4.6,
    "reviews": 95,
    "imageSrc": "/images/products/product12.jpg",
    "availability": true,
    "brand": "GlamourStyle",
    "category": "Ropa Formal para Mujeres",
    "sku": "GS120BLK",
    "sizes": ["XS", "S", "M", "L"],
    "colors": ["#000", "#ff1493", "#ffd700"],
    "description": "An elegant jumpsuit for a stylish and comfortable formal look at any event.",
    "weight": "1.4 kg",
    "material": "Silk and Polyester"
  },
  {
    "id": 13,
    "name": "Classic Pencil Skirt",
    "price": 80.0,
    "discountPrice": 95.0,
    "rating": 4.5,
    "reviews": 85,
    "imageSrc": "/images/products/product13.jpg",
    "availability": true,
    "brand": "TimelessTrend",
    "category": "Ropa Formal para Mujeres",
    "sku": "TT80BLU",
    "sizes": ["S", "M", "L"],
    "colors": ["#336699", "#000", "#fff"],
    "description": "A classic pencil skirt for a versatile and timeless formal wardrobe.",
    "weight": "0.8 kg",
    "material": "Cotton Blend"
  },
  {
    "id": 14,
    "name": "Royal Wedding Gown",
    "price": 350.0,
    "discountPrice": 400.0,
    "rating": 4.9,
    "reviews": 150,
    "imageSrc": "/images/products/product14.jpg",
    "availability": true,
    "brand": "RoyalElegance",
    "category": "Ropa de Ceremonia",
    "sku": "RE350WHT",
    "sizes": ["XS", "S", "M", "L"],
    "colors": ["#fff", "#ffd700", "#ff6347"],
    "description": "A breathtaking royal wedding gown fit for a queen. Exquisite lace and intricate details.",
    "weight": "3.0 kg",
    "material": "Lace and Silk"
  },
  {
    "id": 15,
    "name": "Black-tie Evening Dress",
    "price": 300.0,
    "discountPrice": 350.0,
    "rating": 4.8,
    "reviews": 120,
    "imageSrc": "/images/products/product15.jpg",
    "availability": true,
    "brand": "EveningElegance",
    "category": "Ropa de Ceremonia",
    "sku": "EE300BLK",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["#000", "#fff", "#8a2be2"],
    "description": "A glamorous black-tie evening dress for the most special occasions.",
    "weight": "2.5 kg",
    "material": "Satin and Tulle"
  },
  {
    "id": 16,
    "name": "Ceremony Tuxedo for Kids",
    "price": 80.0,
    "discountPrice": 95.0,
    "rating": 4.7,
    "reviews": 90,
    "imageSrc": "/images/products/product16.jpg",
    "availability": true,
    "brand": "LittleElegance",
    "category": "Ropa de Ceremonia",
    "sku": "LE80BLK",
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["#000", "#fff", "#c0c0c0"],
    "description": "A charming ceremony tuxedo for the little ones. Make them feel special on important occasions.",
    "weight": "1.0 kg",
    "material": "Cotton Blend"
  },
  {
    "id": 17,
    "name": "Dapper Boy's Suit",
    "price": 60.0,
    "discountPrice": 70.0,
    "rating": 4.6,
    "reviews": 80,
    "imageSrc": "/images/products/product17.jpg",
    "availability": true,
    "brand": "LittleDapper",
    "category": "Ropa Formal para Niños",
    "sku": "LD60GRY",
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["#333", "#555", "#ddd"],
    "description": "A dapper suit for boys, perfect for formal events and family gatherings.",
    "weight": "1.2 kg",
    "material": "Polyester Blend"
  },
  {
    "id": 18,
    "name": "Adorable Princess Dress",
    "price": 45.0,
    "discountPrice": 55.0,
    "rating": 4.5,
    "reviews": 70,
    "imageSrc": "/images/products/product18.jpg",
    "availability": true,
    "brand": "LittlePrincess",
    "category": "Ropa Formal para Niños",
    "sku": "LP45PNK",
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["#ffc0cb", "#fff", "#ffa500"],
    "description": "An adorable princess dress for little girls, perfect for special occasions.",
    "weight": "0.8 kg",
    "material": "Cotton and Tulle"
  },
  {
    "id": 19,
    "name": "Casual Boy's Shirt and Pants Set",
    "price": 35.0,
    "discountPrice": 40.0,
    "rating": 4.4,
    "reviews": 65,
    "imageSrc": "/images/products/product19.jpg",
    "availability": true,
    "brand": "PlayfulKids",
    "category": "Ropa Formal para Niños",
    "sku": "PK35BLU",
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["#4169e1", "#008000", "#ff4500"],
    "description": "A comfortable and casual set for boys, perfect for everyday wear and semi-formal occasions.",
    "weight": "0.6 kg",
    "material": "Cotton"
  }
]

export default products