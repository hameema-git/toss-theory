export type Tag = "veg" | "protein" | "sugarfree" | "gf";

export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  tags: Tag[];
  img: string;
  popular?: boolean;
}

export const tagStyles: Record<Tag, string> = {
  veg: "bg-lime text-ink",
  protein: "bg-coral text-cream",
  sugarfree: "bg-mango text-ink",
  gf: "bg-berry text-cream",
};

export const tagLabels: Record<Tag, string> = {
  veg: "Veg",
  protein: "High Protein",
  sugarfree: "No Refined Sugar",
  gf: "Gluten-Free",
};

export const menu: MenuItem[] = [
  {
    name: "The Classic Toss",
    desc: "Our signature rainbow salad — 12+ fresh ingredients tossed in a citrus-honey dressing.",
    price: 320,
    tags: ["veg"],
    img: "/images/tossing.jpg",
    popular: true,
  },
  {
    name: "Avocado Quinoa Bowl",
    desc: "Creamy avocado, fluffy quinoa, roasted peppers, feta & a lemon-tahini drizzle.",
    price: 390,
    tags: ["veg", "gf"],
    img: "/images/bowl-quinoa.jpg",
    popular: true,
  },
  {
    name: "Mediterranean Bowl",
    desc: "Greek roasted veg, kalamata olives, hummus and herbed quinoa. Santorini state of mind.",
    price: 370,
    tags: ["veg"],
    img: "/images/bowl-quinoa.jpg",
  },
  {
    name: "Morning Oatmeal Bowl",
    desc: "Slow-cooked oats, strawberries, banana, granola & a warm almond butter drizzle.",
    price: 280,
    tags: ["veg"],
    img: "/images/bowl-oatmeal.jpg",
    popular: true,
  },
  {
    name: "Berry Yogurt Bowl",
    desc: "Thick hung yogurt, mixed berry compote, crunchy granola and a honey finish.",
    price: 290,
    tags: ["veg"],
    img: "/images/bowl-yogurt.jpg",
  },
  {
    name: "Chia Paradise",
    desc: "Overnight chia layered with mango puree, berries and toasted coconut.",
    price: 260,
    tags: ["veg", "sugarfree"],
    img: "/images/bowl-chia.jpg",
  },
  {
    name: "Tropical Sunrise",
    desc: "Mango-pineapple smoothie bowl topped with dragon fruit, kiwi & coconut flakes.",
    price: 300,
    tags: ["veg", "sugarfree"],
    img: "/images/bowl-smoothie.jpg",
    popular: true,
  },
  {
    name: "Spicy Grilled Chicken Rice",
    desc: "Charred grilled chicken over herb rice with fresh greens & our house hot sauce.",
    price: 420,
    tags: ["protein"],
    img: "/images/bowl-chicken.jpg",
    popular: true,
  },
  {
    name: "Broasted Chicken & Fries",
    desc: "Golden broasted chicken, crispy fries and a creamy house dip. Worth every bite.",
    price: 380,
    tags: ["protein"],
    img: "/images/broasted.jpg",
  },
  {
    name: "Protein Power Bowl",
    desc: "Greens, grains, pomegranate, seeds & your protein of choice. Fuel, but make it pretty.",
    price: 450,
    tags: ["protein", "gf"],
    img: "/images/hero-bowl.jpg",
  },
];

export const bestsellers: MenuItem[] = [
  menu[0],
  menu[1],
  menu[6],
  menu[7],
  menu[8],
  menu[3],
];

export const PHONE_DISPLAY = "89435 48100";
export const PHONE_TEL = "+918943548100";
export const WHATSAPP_URL =
  "https://wa.me/918943548100?text=Hi%20Toss%20Theory!%20I%27d%20like%20to%20order%20a%20bowl.";
export const INSTAGRAM_URL = "https://www.instagram.com/tosstheory.kochi";
