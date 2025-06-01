import { Product } from "../types/product";

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Centella Ampoule",
    price: 7.00,
    description: "Calming ampoule enriched with Centella Asiatica to soothe irritated skin and promote healing.",
    image: "https://images.unsplash.com/photo-1715750968540-841103c78d47?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ampoule",
    rating: 4.5,
    info: "Formulated with 80% Centella extract, this ampoule is ideal for calming acne-prone or sensitive skin. Use after toner and before moisturizer.",
  },
  {
    id: 2,
    title: "The Ordinary Red Peeling",
    price: 17.00,
    description: "Powerful exfoliating peel with a blend of acids to renew skin and boost brightness.",
    image: "https://images.unsplash.com/photo-1669971622768-10c3f0dfeded?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Peeling",
    rating: 4.5,
    info: "Contains AHA 30% and BHA 2% for intense exfoliation. Recommended for use once a week. Avoid sun exposure post-use."
  },
  {
    id: 3,
    title: "The Ordinary White Peeling",
    price: 17.00,
    description: "Overnight cream that deeply hydrates while gently encouraging cell turnover.",
    image: "https://images.unsplash.com/photo-1690896060855-d346f80e86b3?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Peeling",
    rating: 3.9,
    info: "Gentle formula suitable for sensitive skin. Ideal for overnight use to reveal refreshed skin in the morning."
  },
  {
    id: 4,
    title: "The Ordinary Moisturizing Cream",
    price: 32.00,
    description: "Hydrating cream with rosewater essence that leaves skin soft and supple all day.",
    image: "https://images.unsplash.com/photo-1679394042175-717ca34ef0f2?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Cream",
    rating: 3.8,
    info: "Rich in rosewater and ceramides to lock in moisture. Use daily after cleansing for best results."
  },
  {
    id: 5,
    title: "La Roche Anti-Pore Cream",
    price: 10.0,
    description: "Mattifying moisturizer designed to refine pores and regulate excess oil.",
    image: "https://images.unsplash.com/photo-1641130290711-01c4c4558562?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Cream",
    rating: 4.6,
    info: "Contains seboregulating ingredients that minimize the appearance of pores and control shine, suitable for oily and combination skin types."
  },
  {
    id: 6,
    title: "Mockup Lip Serum",
    price: 29.0,
    description: "Lip serum packed with nourishing antioxidants to enhance smoothness and volume.",
    image: "https://images.unsplash.com/photo-1704297004675-b2532b947c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Serum",
    rating: 4.4,
    info: "Enriched with vitamins and plant extracts to hydrate and plump lips, reducing fine lines and enhancing natural color."
  },
  {
    id: 7,
    title: "Ela De Pure Vitamin C Serum",
    price: 34.0,
    description: "Vitamin C serum that brightens the complexion and reduces signs of dullness.",
    image: "https://images.unsplash.com/photo-1723951174326-2a97221d3b7f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Serum",
    rating: 4.2,
    info: "Formulated with stabilized vitamin C to combat oxidative stress, even skin tone, and promote collagen synthesis for a youthful glow."
  },
  {
    id: 8,
    title: "Ela De Pure Centella Mask",
    price: 8.0,
    description: "Moisturizing face mask with Centella extract to calm and refresh sensitive skin.",
    image: "https://images.unsplash.com/photo-1743931370903-8a5ca3807e2d?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Mask",
    rating: 4.2,
    info: "Soothes irritated skin and strengthens the skin barrier, making it ideal for post-sun exposure or sensitive skin conditions."
  },
  {
    id: 9,
    title: "Ela De Pure Tea Tree Mask",
    price: 8.5,
    description: "Purifying mask with tea tree oil to cleanse pores and reduce breakouts.",
    image: "https://images.unsplash.com/photo-1743933282038-e9c576d97076?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Mask",
    rating: 4.5,
    info: "Contains tea tree oil known for its antibacterial properties, helping to control acne and prevent future breakouts."
  },
  {
    id: 10,
    title: "Ela De Pure Collagen Mask",
    price: 8.0,
    description: "Collagen-boosting mask that firms skin and smooths fine lines.",
    image: "https://images.unsplash.com/photo-1743928217924-77ec5f39c4fb?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Mask",
    rating: 5.0,
    info: "Infused with hydrolyzed collagen to enhance skin elasticity and reduce the appearance of wrinkles."
  },
  {
    id: 11,
    title: "Ela De Pure Rosehip Mask",
    price: 8.0,
    description: "Nourishing mask with rosehip oil to boost skin hydration and glow.",
    image: "https://images.unsplash.com/photo-1748390050094-540d1dd4e872?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    category: "Mask",
    rating: 3.9,
    info: "Rich in essential fatty acids and antioxidants, rosehip oil helps to hydrate the skin and improve overall tone and texture."
  },
  {
    id: 12,
    title: "Ela De Pure Retinol Mask",
    price: 8.5,
    description: "Retinol-infused mask to improve skin texture and diminish wrinkles.",
    image: "https://images.unsplash.com/photo-1743929812282-3e9a2c149982?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Mask",
    rating: 4.9,
    info: "Combines retinol with moisturizing agents to promote cell turnover and reduce signs of aging without excessive dryness."
  },
  {
    id: 13,
    title: "Minimalist Serum",
    price: 19.00,
    rating: 4.6,
    description: "Lightweight peptide serum to strengthen and soothe skin barrier function.",
    image: "https://images.unsplash.com/photo-1695479044464-67299fa84782?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    category: "Serum",
    info: "Formulated with multi-peptides and amino acids to restore the skin’s natural barrier, reduce inflammation, and enhance hydration without greasiness."
  },
  
  {
    id: 14,
    title: "Natural Lip Balm",
    price: 14.00,
    description: "Rich lip balm formulated with natural oils to keep lips hydrated and soft.",
    image: "https://images.unsplash.com/photo-1672883435480-81b9f385654e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Lip Balm",
    rating: 4.5,
    info: "Made with a blend of shea butter, coconut oil, and beeswax to lock in moisture, soothe chapped lips, and provide a natural glossy finish."
  },
  {
    id: 16,
    title: "The Ordinary Cleanser",
    price: 29.00,
    description: "Gentle facial cleanser that removes impurities and makeup while keeping your skin hydrated and balanced.",
    category: "Cleanser",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585832622886-272fb3a927e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Contains squalane and glycerin to cleanse without stripping moisture, making it ideal for all skin types including sensitive and acne-prone skin."
  },
  {
    id: 17,
    title: "Curology Cleanser",
    price: 14.00,
    description: "Mild foaming cleanser that gently cleanses and soothes sensitive skin for a fresh, calm complexion.",
    category: "Cleanser",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Formulated with hydrating ingredients and no fragrance, it supports skin pH balance and reduces redness without causing dryness or irritation."
  },
  {
    id: 18,
    title: "Pure Clay Mask",
    price: 19.00,
    description: "Purifying clay mask that detoxifies skin and tightens pores for a smooth, matte finish.",
    category: "Mask",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1710693547884-41a6113d67d2?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Enriched with charcoal and three pure clays to absorb excess oil, remove impurities, and visibly reduce pores for a clarified skin tone."
  },
  {
    id: 19,
    title: "Janssen Peeling Mask",
    price: 26.00,
    description: "Gentle peeling mask with natural acids that exfoliate dead skin cells for a brighter, renewed complexion.",
    category: "Mask",
    rating: 3.6,
    image: "https://images.unsplash.com/photo-1674867688570-1ec1ff21f597?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Uses fruit-derived AHA and BHA to gently exfoliate the outer skin layers, enhancing radiance and improving skin texture over time."
  },
  {
    id: 20,
    title: "SPF Cream",
    price: 32.00,
    description: "Lightweight moisturizing cream with broad-spectrum SPF to protect skin from harmful UV rays all day long.",
    category: "Cream",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8",
    info: "Formulated with UVA/UVB filters and hydrating ingredients like hyaluronic acid to defend against sun damage while keeping skin supple."
  },
  {
    id: 21,
    title: "Sesderma Serum",
    price: 31.00,
    description: "Hydrating serum rich in hyaluronic acid and antioxidants to plump skin and restore natural glow.",
    category: "Serum",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Deeply hydrates with multi-molecular hyaluronic acid and fights oxidative stress with a powerful antioxidant complex for luminous skin."
  },
  {
    id: 22,
    title: "Skeyndor Retinol Cream",
    price: 29.50,
    description: "Retinol cream that smooths fine lines and boosts collagen for firmer, youthful skin.",
    category: "Cream",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559251400-45e1df4acb03?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Combines pure retinol with nourishing peptides to reduce signs of aging and stimulate cell renewal while minimizing irritation."
  },
  {
    id: 23,
    title: "Sesderma Vitamin C Cream",
    price: 42.00,
    description: "Brightening vitamin C cream that evens skin tone and enhances radiance with antioxidant protection.",
    category: "Cream",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1686831758227-1802d0ba5eda?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Features stabilized vitamin C to brighten dull skin and reduce hyperpigmentation while protecting against environmental damage."
  },
  {
    id: 24,
    title: "C-Prime Serum",
    price: 32.00,
    description: "Powerful vitamin C serum that protects skin from environmental stress and boosts collagen production.",
    category: "Serum",
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1680536663869-019bd6ec9fec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHMlMjBmb3IlMjBmYWNlfGVufDB8fDB8fHww",
    info: "Delivers high-potency vitamin C along with ferulic acid to improve elasticity, even out skin tone, and neutralize free radicals."
  },
  {
    id: 25,
    title: "Ela De Pure Cleanser",
    price: 22.50,
    description: "Oil-based cleanser that gently removes makeup and impurities while nourishing the skin.",
    category: "Cleanser",
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1745141063798-7fa04698ea80?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Infused with botanical oils to dissolve makeup and excess sebum without clogging pores, leaving skin soft and refreshed."
  },
  {
    id: 26,
    title: "Beauty Of Joseon Cream & SPF",
    price: 88.50,
    description: "Hydrating cream with SPF protection and nourishing Korean botanical extracts for radiant skin.",
    category: "Cream",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1709551264845-e9dddd775388?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Combines niacinamide, ginseng extract, and SPF to brighten, protect, and hydrate skin for a dewy, youthful glow."
  },
  {
    id: 27,
    title: "The Body Shop Cleansing Oil",
    price: 74.00,
    description: "Rich cleansing oil that melts away makeup and impurities, leaving skin soft and moisturized.",
    category: "Cleanser",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1563804447971-6e113ab80713?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Packed with nourishing oils like camellia and almond, it gently cleanses while strengthening the skin barrier and maintaining moisture balance."
  }
  
  
];

export {};