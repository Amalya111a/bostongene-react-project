export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating?: number;
    info: string;
  }
  
  export const Product_API_URL =
    "https://script.google.com/macros/s/AKfycbwwZwuILqbxVAOKTf_U8NZ316p7IsT8J-It4sc24a1-7PomlFGOBBCCAQVENSbP8LAp/exec";
  
  export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch(Product_API_URL);
  
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
  
    const data = await response.json();
    return data;
  };
  
  export default fetchProducts;
  