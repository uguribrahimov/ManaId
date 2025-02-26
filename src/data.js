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
        id: 7,
        title: "Classic Sofa",
        top: 80,
        left: 11,
        image: "/assets/HomPage5-8.jpg",
        price: "$200",
        link: "http://localhost:5173/cartDetails/7"
      },
      {
        id: 3,
        title: "King Bed",
        top: 80,
        left: 56,
        image: "/assets/HomPage5-3.jpg",
        price: "$350",
        link: "http://localhost:5173/cartDetails/3"
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
      image: "/assets/HomPage5-4.jpg",
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
  ],
  membership: [
    {
      name: "Free",
      price: 0,
      period: "Month",
      description: "The easiest and quickest way to try mana.id lorem",
      buttonText: "Sign up free",
      benefits: [
        "Benefit 1",
        "Benefit 2",
        "Benefit 3",
        "Benefit 4",
        "Benefit 5",
        "Benefit 6",
        "Benefit 7",
        "Benefit 8",
      ],
    },
    {
      name: "Pro",
      price: 15,
      period: "Month",
      description: "More power for small company who need to improve their interiors",
      buttonText: "Get started",
      benefits: [
        "All benefits of Free, and:",
        "Benefit 1",
        "Benefit 2",
        "Benefit 3",
        "Benefit 4",
        "Benefit 5",
        "Benefit 6",
        "Benefit 7",
      ],
    },
    {
      name: "Business",
      price: 25,
      period: "Month",
      description: "More power for medium company who need to improve their interiors",
      buttonText: "Get started",
      benefits: [
        "All benefits of Pro, and:",
        "Benefit 1",
        "Benefit 2",
        "Benefit 3",
        "Benefit 4",
        "Benefit 5",
        "Benefit 6",
        "Benefit 7",
      ],
    },
    {
      name: "Enterprise",
      price: 80,
      period: "Month",
      description: "More power for big company who need to improve their interiors",
      buttonText: "Get started",
      benefits: [
        "All benefits of Business, and:",
        "Benefit 1",
        "Benefit 2",
        "Benefit 3",
        "Benefit 4",
        "Benefit 5",
        "Benefit 6",
        "Benefit 7",
      ],
    },
  ]
};

export default data;









