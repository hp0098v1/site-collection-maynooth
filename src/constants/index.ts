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
