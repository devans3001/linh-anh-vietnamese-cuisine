/* LINH ANH — verified facts only. Menu + prices: their DoorDash store
   page (Scarborough), fetched Oct 24, 2026 — "Prices on this menu are
   set directly by the Merchant." Quotes: verbatim, source named on
   each. Full harvest: research/material.md. */

export const business = {
  name: "Linh Anh",
  fullName: "Linh Anh Vietnamese Cuisine",
  tagline: "Northern Vietnamese, from Ha Long to Midland Avenue.",
  address: "3290 Midland Ave Unit 1, Scarborough, ON M1V 4W8",
  shortAddress: "3290 Midland Ave — Midland & Finch",
  phoneDisplay: "(416) 332-8688",
  phoneHref: "tel:+14163328688",
  hours: "Open every day · 11 AM – 11 PM",
  instagram: "@linhanhvietnamesecuisine",
  instagramUrl: "https://www.instagram.com/linhanhvietnamesecuisine",
  rating: "4.6",
  reviewCount: "4,000+",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Linh+Anh+Vietnamese+Cuisine+3290+Midland+Ave+Scarborough",
};

export type Dish = { name: string; vn?: string; note?: string; price?: string };
export type Stall = {
  no: string;
  title: string;
  vn: string;
  intro: string;
  dishes: Dish[];
};

export const stalls: Stall[] = [
  {
    no: "01",
    title: "Phở — the signature stall",
    vn: "PHỞ",
    intro:
      "Northern style, the Ha Long way: a clear, deep broth that doesn't hide behind garnish. The first dish on the list carries the restaurant's name — it comes with the bone marrow in it.",
    dishes: [
      {
        name: "House Special Pho #1 with Bone Marrow",
        vn: "P2 · Phở Đặc Biệt",
        note: "The signature. Rare beef, tendon, tripe, brisket, crunchy flank, beef balls — and the marrow. Rated 96% on DoorDash, the highest on their menu.",
        price: "$21.95",
      },
      {
        name: "House Special Pho #2",
        vn: "P3 · Phở Đặc Biệt",
        note: "Everything in the #1 except the marrow. DoorDash's #3 most-liked dish in the house.",
        price: "$17.95",
      },
      { name: "Rare Beef Pho", vn: "P4 · Phở Tái", note: "Fresh rare beef, cooked by the broth itself at the table.", price: "$17.95" },
      { name: "Rare Beef & Beef Ball Pho", vn: "P5 · Phở Tái, Bò Viên", price: "$17.95" },
      { name: "Grilled Chicken Pho", vn: "P13 · Phở Gà Nướng", price: "$17.95" },
      { name: "Plain Pho — broth & noodles", vn: "P14 · Phở Không", note: "For the purists: the broth, unaccompanied.", price: "$12.00" },
    ],
  },
  {
    no: "02",
    title: "Starters — first stall on the left",
    vn: "KHAI VỊ",
    intro: "Rolled, wrapped and fried to order — the things that land on the table while the broth is still being ladled. Jasmine tea arrives in copper cups.",
    dishes: [
      { name: "Fresh Spring Rolls (2 pcs)", vn: "A01 · Gỏi Cuốn Tôm Thịt", note: "Pork and shrimp, lettuce and herbs in rice paper.", price: "$9.95" },
      { name: "Crispy Spring Rolls (3 pcs)", vn: "A02 · Chả Giò", price: "$13.95" },
      { name: "Fried Chicken Wings (5 pcs)", vn: "A04 · Cánh Gà Chiên", price: "$11.95" },
      { name: "Vietnamese Dumplings (2 pcs)", vn: "A05 · Bánh Gối", price: "$9.95" },
      {
        name: "Egg & Bone Marrow Banh Mi",
        vn: "A6 · Bánh Mì Trứng, Xương Tủy",
        note: "Yes, marrow again — this time in a baguette, with egg. The stall regulars know.",
        price: "$17.95",
      },
    ],
  },
  {
    no: "03",
    title: "Vermicelli & rice — the filling stalls",
    vn: "BÚN & CƠM",
    intro: "Char-grilled over open flame, the way the stall cooks do it — smoke first, then the sizzle. Every vermicelli bowl lands with fresh herbs, greens and peanuts.",
    dishes: [
      {
        name: "Vermicelli with Grilled Pork & Spring Rolls",
        vn: "V1 · Bún Thịt Heo Nướng, Chả Giò",
        note: "One of the most-ordered dishes in the house, per DoorDash itself.",
        price: "$18.95",
      },
      { name: "Bun Cha Hanoi", vn: "V3 · Bún Chả Hà Nội", note: "The Hanoi original — grilled pork patties in warm broth, vermicelli on the side.", price: "$23.95" },
      { name: "Spicy Beef Noodle Soup — Bun Bo Hue", vn: "S8 · Bún Bò Huế", note: "Rated 95% on DoorDash. It means the spicy.", price: "$18.95" },
      { name: "Crab Noodle Soup", vn: "S10 · Bún Riêu Cua", note: "Reviewers single this one out — hearty, tomato-rich, crab-forward.", price: "$18.95" },
      { name: "Rice with Grilled Pork Chop", vn: "C5 · Cơm Sườn Heo Nướng", price: "$17.95" },
      { name: "Rice with Grilled Beef Ribs", vn: "C7 · Cơm Sườn Bò Nướng", price: "$18.95" },
    ],
  },
  {
    no: "04",
    title: "Banh mi & the rest of the market",
    vn: "BÁNH MÌ",
    intro: "Crackly baguettes, wok-tossed noodles, slow stews and the sweet stall at the end of the row.",
    dishes: [
      { name: "Grilled Pork Banh Mi", vn: "B1 · Bánh Mì Thịt Heo Nướng", price: "$11.95" },
      { name: "Crispy Crepe", vn: "S11 · Bánh Xèo", note: "Turmeric crepe, folded over bean sprouts and herbs — listen for the sizzle (xèo).", price: "$19.95" },
      { name: "Beef Pad Thai", vn: "T1 · Pad Thai Thịt Bò", price: "$16.95" },
      { name: "Beef Stew with Rice", vn: "F2 · Cơm Bò Kho", note: "Baguette or egg noodles instead of rice, your call.", price: "$14.95" },
      { name: "Chicken Curry with Rice", vn: "R1 · Cơm Cà Ri Gà", note: "All their curries are spicy. That's the whole warning.", price: "$14.95" },
      { name: "Three Colour Dessert", vn: "D16 · Chè Ba Màu", note: "The market's sweet finish — layered, icy, coconut-rich.", price: "$9.25" },
    ],
  },
];

/* Verbatim words from real reviews — reviewer and source named. */
export const lineup = [
  {
    quote:
      "The P2 Pho Dac Biet #1 with bone marrow is soooo good that I keep coming back to it every month… the portion is really quite generous as well.",
    source: "Rodney H — DoorDash review",
  },
  {
    quote: "Best Pho in Agincourt. Very quaint, eclectic atmosphere. Friendly staff. Liked the copper cups for the tea.",
    source: "Google review",
  },
  {
    quote: "It beats all of the pho places we've tried in Toronto, Montreal, Vancouver, and even in LA and New York City.",
    source: "Bite of TO — food blog review",
  },
  {
    quote: "This Pho came LOADED with protein… the Meat were very tender, and the Broth was INSANELY RICH, it had so much flavour.",
    source: "Google review",
  },
];

export const facts = [
  { k: "4.6★", v: "across ~4,000 Google reviews" },
  { k: "2020", v: "started as a ghost kitchen" },
  { k: "Ha Long", v: "Chef Linh's hometown, northern Vietnam" },
  { k: "11–11", v: "open every single day" },
];
