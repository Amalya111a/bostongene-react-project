// features/products/productsAPI.ts
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbw37rwT1_bq5PoYTLkW5RMPSrgKVAm_vXx1zTfmXui2Sy5r3IodivysGXiwuGWJ8jI5/exec";

export const fetchProductsFromGoogleSheets = async () => {
  const response = await fetch(`${GOOGLE_SHEETS_URL}?timestamp=${Date.now()}`); // cache busting
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.map((product: any) => ({
    ...product,
    id: Number(product.id),
    price: Number(product.price),
    rating: Number(product.rating ?? 0),
    ratingCount: Number(product.ratingCount ?? 0),
    ratingSum: Number(product.ratingSum ?? 0),
  }));
};

export const submitRatingToSheets = async (productId: number, rating: number) => {
  const response = await fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, rating }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit rating");
  }

  return await response.json(); // returns newRating
};
