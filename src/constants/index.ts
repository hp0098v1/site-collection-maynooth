export const DROPDOWN_MENU_ITEMS = [
  { id: 1, title: "هال", path: "/category/living-room" },
  { id: 2, title: "اتاق خواب", path: "/category/bedroom" },
  { id: 3, title: "آشپزخانه و پذیرایی", path: "/category/kitchen-and-dining" },
];

export const FOOTER_SOCIAL_ICONS = [
  { id: 3, alt: "pinterest", src: "/assets/icons/pinterest-light.png" },
  { id: 2, alt: "instagram", src: "/assets/icons/instagram-light.png" },
  { id: 1, alt: "facebook", src: "/assets/icons/facebook-light.png" },
];

export const HERO_SOCIAL_ICONS = [
  { id: 3, alt: "pinterest", src: "/assets/icons/pinterest.png" },
  { id: 2, alt: "instagram", src: "/assets/icons/instagram.png" },
  { id: 1, alt: "facebook", src: "/assets/icons/facebook.png" },
];

export const FOOTER_LINKS = {
  information: {
    title: "اطلاعات",
    links: [
      { id: 1, title: "اطلاعات", path: "" },
      { id: 2, title: "اطلاعات", path: "" },
      { id: 3, title: "اطلاعات", path: "" },
      { id: 4, title: "اطلاعات", path: "" },
      { id: 5, title: "اطلاعات", path: "" },
    ],
  },
  element: {
    title: "عناصر",
    links: [
      { id: 1, title: "عناصر", path: "" },
      { id: 2, title: "عناصر", path: "" },
      { id: 3, title: "عناصر", path: "" },
      { id: 4, title: "عناصر", path: "" },
      { id: 5, title: "عناصر", path: "" },
    ],
  },
  help: {
    title: "کمک رسانی",
    links: [
      { id: 1, title: "کمک رسانی", path: "" },
      { id: 2, title: "کمک رسانی", path: "" },
      { id: 3, title: "کمک رسانی", path: "" },
      { id: 4, title: "کمک رسانی", path: "" },
      { id: 5, title: "کمک رسانی", path: "" },
    ],
  },
};

export type FooterLink = typeof FOOTER_LINKS.information;

export const APPLIANCES = ["همه", "مبل", "تخت", "صندلی", "رخت آویز"];

export const NEW_IN_PRODUCTS = [
  {
    id: 1,
    title: "محصول 1",
    price: 200,
    imageUrl: "/assets/images/home/new-in/product-1.png",
  },
  {
    id: 2,
    title: "محصول 2",
    price: 150,
    imageUrl: "/assets/images/home/new-in/product-2.png",
  },
  {
    id: 3,
    title: "محصول 3",
    price: 180,
    imageUrl: "/assets/images/home/new-in/product-3.png",
  },
  {
    id: 4,
    title: "محصول 4",
    price: 220,
    imageUrl: "/assets/images/home/new-in/product-4.png",
  },
  {
    id: 5,
    title: "محصول 5",
    price: 190,
    imageUrl: "/assets/images/home/new-in/product-5.png",
  },
  {
    id: 6,
    title: "محصول 6",
    price: 210,
    imageUrl: "/assets/images/home/new-in/product-6.png",
  },
  {
    id: 7,
    title: "محصول 7",
    price: 230,
    imageUrl: "/assets/images/home/new-in/product-7.png",
  },
  {
    id: 8,
    title: "محصول 8",
    price: 170,
    imageUrl: "/assets/images/home/new-in/product-8.png",
  },
];

export const MOST_POPULAR_PRODUCTS = [
  {
    id: 1,
    title: "محصول 1",
    price: 200,
    imageUrl: "/assets/images/category/most-popular/product-1.png",
  },
  {
    id: 2,
    title: "محصول 2",
    price: 300,
    imageUrl: "/assets/images/category/most-popular/product-2.png",
  },
  {
    id: 3,
    title: "محصول 3",
    price: 200,
    imageUrl: "/assets/images/category/most-popular/product-3.png",
  },
  {
    id: 4,
    title: "محصول 4",
    price: 300,
    imageUrl: "/assets/images/category/most-popular/product-4.png",
  },
  {
    id: 5,
    title: "محصول 5",
    price: 200,
    imageUrl: "/assets/images/category/most-popular/product-1.png",
  },
  {
    id: 6,
    title: "محصول 6",
    price: 300,
    imageUrl: "/assets/images/category/most-popular/product-2.png",
  },
  {
    id: 7,
    title: "محصول 7",
    price: 200,
    imageUrl: "/assets/images/category/most-popular/product-3.png",
  },
  {
    id: 8,
    title: "محصول 8",
    price: 300,
    imageUrl: "/assets/images/category/most-popular/product-4.png",
  },
];

export const CATEGORY_PRODUCTS = [
  {
    id: 1,
    title: "محصول 1",
    price: 200,
    imageUrl: "/assets/images/category/products/product-1.png",
    badge: "جدید",
  },
  {
    id: 2,
    title: "محصول 2",
    price: 250,
    imageUrl: "/assets/images/category/products/product-2.png",
  },
  {
    id: 3,
    title: "محصول 3",
    price: 200,
    imageUrl: "/assets/images/category/products/product-3.png",
    badge: "جدید",
  },
  {
    id: 4,
    title: "محصول 4",
    price: 300,
    imageUrl: "/assets/images/category/products/product-4.png",
  },
  {
    id: 5,
    title: "محصول 5",
    price: 200,
    imageUrl: "/assets/images/category/products/product-5.png",
    badge: "30 %",
  },
  {
    id: 6,
    title: "محصول 6",
    price: 250,
    imageUrl: "/assets/images/category/products/product-6.png",
    badge: "جدید",
  },
  {
    id: 7,
    title: "محصول 7",
    price: 200,
    imageUrl: "/assets/images/category/products/product-7.png",
  },
  {
    id: 8,
    title: "محصول 8",
    price: 300,
    imageUrl: "/assets/images/category/products/product-8.png",
  },
  {
    id: 9,
    title: "محصول 9",
    price: 300,
    imageUrl: "/assets/images/category/products/product-9.png",
  },
];

export const CATEGORIES = [
  {
    id: 1,
    title: "هال",
    imageUrl: "/assets/images/category/categories/living-room.png",
  },
  {
    id: 2,
    title: "اتاق خواب",
    imageUrl: "/assets/images/category/categories/bed-room.png",
  },
  {
    id: 3,
    title: "آشپزخانه",
    imageUrl: "/assets/images/category/categories/kitchen.png",
  },
  {
    id: 4,
    title: "سالن پذیرایی",
    imageUrl: "/assets/images/category/categories/dining.png",
  },
];

export type Product = (typeof CATEGORY_PRODUCTS)[0];
