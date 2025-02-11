// public/data.js

const data = {
  homepage: {
    discountText: "30%",
    discountDescription: "Discount for new mana user",
    title: "The Best Choice for Your House Interior",
    description: "We can be your storyteller in determining the ambience of your home that makes you comfortable at home.",
    getStartedButtonText: "Get Started",
    manaIntroductionButtonText: "Mana Introduction",
    imageURL: "/assets/imageHomep.jpg",
    mapAreas: [
      {
        coords: "100,100,50",
        alt: "Sandalye",
        title: "Stul",
        className: "map-area-sandalye"
      },
      {
        coords: "250,150,50",
        alt: "Masa",
        title: "Masa",
        className: "map-area-masa"
      },
      {
        coords: "400,200,50",
        alt: "Lamba",
        title: "Lampa",
        className: "map-area-lampa"
      }
    ]
  },
  homePage2: {
    title: "3.5M+ Company Trust With Mana",
    description: "Do you want your home or office to look the way you want? We have many architects to make that happen.",
    buttonText: "More company",
    images: [
      "/assets/Image.homepage2.jpg",
      "/assets/imgHomePage2.jpg",
      "/assets/imgHomePage2-3.jpg",
      "/assets/imgHomePage2-4.jpg",
      "/assets/imgHomePage2-5.jpg",
      "/assets/imgHomePage2-6.jpg"
    ],
    cards: [
      {
        icon: "🎨",
        title: "1.2M - Unique Idea",
        description: "Unique Furniture Sales"
      },
      {
        icon: "🛋️",
        title: "1.2M - Unique Idea",
        description: "Unique Furniture Sales"
      },
      {
        icon: "📦",
        title: "1.2M - Unique Idea",
        description: "Unique Furniture Sales"
      }
    ]
  },
  features: [
    {
      id: 1,
      title: "Discount Every Month",
      description: "Get discount voucher every month",
      image: "/assets/imgHomepage3-1.jpg"
    },
    {
      id: 2,
      title: "24/7 Consultation",
      description: "Free consultation with specialist",
      image: "/assets/imgHomepage3-3.jpg"
    },
    {
      id: 3,
      title: "Free Shipping",
      description: "Multi-purpose Development",
      image: "/assets/imgHomepage3-2.jpg"
    }
  ],
  furnitureData: [
    { id: 1, category: "Sofa", name: "Luxury Sofa", price: "$500", image: "/assets/HomePage5-1.jpg" },
    { id: 2, category: "Chair", name: "Comfort Chair", price: "$150", image: "/assets/HomPage5-2.jpg" },
    { id: 3, category: "Table", name: "Modern Table", price: "$300", image: "/assets/HomPage5-3.jpg" },
    { id: 4, category: "Mirror", name: "Wall Mirror", price: "$100", image: "/assets/HomPage5-4.jpg" },
    { id: 5, category: "Bedroom", name: "King Bed", price: "$800", image: "/assets/HomPage5-5.jpg" },
    { id: 6, category: "Sofa", name: "Classic Sofa", price: "$450", image: "/assets/HomPage5-7.jpg" },
    { id: 7, category: "Chair", name: "Office Chair", price: "$200", image: "/assets/HomPage5-8.jpg" },
    { id: 8, category: "Table", name: "Dining Table", price: "$400", image: "/assets/HomPage5-9.jpg" }
  ],
  cartDetails: [
    {
      id: 1,
      category: "Sofa",
      name: "Luxury Sofa",
      price: "$500",
      image: "/assets/HomePage5-1.jpg",
      description: "Inspired by the majestic architectural forms of visionary architect Santiago Calatrava, this coffee table is a masterpiece of form and function. Zig-zag legs form a kite shaped base in forged iron, which is crowned by a hand carved wood top. Spectacular!",
      dimension: "120x80x40 cm",
      color: "White",
      colors: ["White", "Beige", "Gray"]
    },
    {
      id: 2,
      category: "Chair",
      name: "Comfort Chair",
      price: "$150",
      image: "/assets/HomPage5-2.jpg",
      description: "Inspired by the majestic architectural forms of visionary architect Santiago Calatrava, this coffee table is a masterpiece of form and function. Zig-zag legs form a kite shaped base in forged iron, which is crowned by a hand carved wood top. Spectacular!",
      dimension: "80x40x40 cm",
      color: "Black",
      colors: ["Black", "Blue", "Red"]
    },
    {
      id: 3,
      category: "Table",
      name: "Modern Table",
      price: "$300",
      image: "/assets/HomPage5-3.jpg",
      description: "Inspired by the majestic architectural forms of visionary architect Santiago Calatrava, this coffee table is a masterpiece of form and function. Zig-zag legs form a kite shaped base in forged iron, which is crowned by a hand carved wood top. Spectacular!",
      dimension: "120x60x45 cm",
      color: "Brown",
      colors: ["Brown", "White", "Black"]
    },
    {
      id: 4,
      category: "Mirror",
      name: "Wall Mirror",
      price: "$100",
      image: "/assets/HomPage5-4.png",
      description: "Inspired by the majestic architectural forms of visionary architect Santiago Calatrava, this coffee table is a masterpiece of form and function. Zig-zag legs form a kite shaped base in forged iron, which is crowned by a hand carved wood top. Spectacular!",
      dimension: "100x50 cm",
      color: "Silver",
      colors: ["Silver", "Gold", "Black"]
    },
    {
      id: 5,
      category: "Bedroom",
      name: "King Bed",
      price: "$800",
      image: "/assets/HomPage5-5.jpg",
      description: "Inspired by the majestic architectural forms of visionary architect Santiago Calatrava, this coffee table is a masterpiece of form and function. Zig-zag legs form a kite shaped base in forged iron, which is crowned by a hand carved wood top. Spectacular!",
      dimension: "200x180x60 cm",
      color: "Gray",
      colors: ["Gray", "White", "Black"]
    },
    {
      id: 6,
      category: "Sofa",
      name: "Classic Sofa",
      price: "$450",
      image: "/assets/HomPage5-7.jpg",
      description: "Inspired by the majestic architectural forms of visionary architect Santiago Calatrava, this coffee table is a masterpiece of form and function. Zig-zag legs form a kite shaped base in forged iron, which is crowned by a hand carved wood top. Spectacular!",
      dimension: "120x70x40 cm",
      color: "Beige",
      colors: ["Beige", "White", "Blue"]
    },
    {
      id: 7,
      category: "Chair",
      name: "Office Chair",
      price: "$200",
      image: "/assets/HomPage5-8.jpg",
      description: "Inspired by the majestic architectural forms of visionary architect Santiago Calatrava, this coffee table is a masterpiece of form and function. Zig-zag legs form a kite shaped base in forged iron, which is crowned by a hand carved wood top. Spectacular!",
      dimension: "90x60x60 cm",
      color: "Black",
      colors: ["Black", "Gray", "Brown"]
    },
    {
      id: 8,
      category: "Table",
      name: "Dining Table",
      price: "$400",
      image: "/assets/HomPage5-9.jpg",
      description: "Inspired by the majestic architectural forms of visionary architect Santiago Calatrava, this coffee table is a masterpiece of form and function. Zig-zag legs form a kite shaped base in forged iron, which is crowned by a hand carved wood top. Spectacular!",
      dimension: "180x90x75 cm",
      color: "Brown",
      colors: ["Brown", "White", "Black"]
    }
  ]
};

export default data;
