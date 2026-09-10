
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getAllCategory = async() =>{

    const response = await fetch(`${baseUrl}/category.json`);

   return await response.json();

}
