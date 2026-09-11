
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getAllCategory = async() =>{

    const response = await fetch(`${baseUrl}/category.json`);

   return await response.json();

}
export const getAllFeaturedProducts = async() =>{

    const response = await fetch(`${baseUrl}/products.json`);

   let allProducts =  await response.json();
   let featuredProducts = allProducts.filter((item)=> item.badge === "Popular").slice(0,4);
   
   return featuredProducts;
}
export const getAllNewProducts = async() =>{

    const response = await fetch(`${baseUrl}/products.json`);

   let allProducts =  await response.json();
   let newProducts = allProducts.filter((item)=> item.badge === "New").slice(0,4);
   
   return newProducts;
}

