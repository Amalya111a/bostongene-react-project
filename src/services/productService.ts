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
    "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiTRHPNDuOpwhK5GHq1LrQcT9ptOhbuH5l1NAf6cspfJc_-ke5P6N-nGPzh8zYmcV_yyKTZmPxcg3XJXvRXh2on40OkHEkNzgzgQa6YeBcJELFU3QHcPtvvg0e_Zx3IfuDV34lgXqU9vByuOeRDGQ5Fipfz_ESgm1jkK-zNyp_naD-_jAAVJq3ClQP_2vn2o_p7J2lMPswyA1u_Wk_hRpmkvRZ1cnDU22KQfoLBul4BbiPhjsc9gyEPwfLQ7NzMF1AODXjTAQ_kLZJROIQ1mtLAbMhBzw&lib=MSDSjCNPbr45EoEPhh-RmkEX2Nb-b482m";
  
  export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch(Product_API_URL);
  
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
  
    const data = await response.json();
    return data;
  };
  
  export default fetchProducts;
  