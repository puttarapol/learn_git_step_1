
const BASE_URL = 'https://dummyjson.com'

export const api = {

    getProducts: async( limit = 30 ,skip = 0 )=>{
       const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
       console.log(response)
       return response.json();
    } ,

    getProduct: async(id)=>{
        const response = await fetch(`${BASE_URL}/products/${id}`);
        return response.json();
    } ,

     searchProduct: async(query)=>{
        const response = await fetch(`${BASE_URL}/products/search?=q=${query}`);
        return response.json();
     } , 
     gitCategorise : async()=>{
         const response = await fetch(`${BASE_URL}/products/categorise`) ;
        return response.json();
     } ,

     getProductByCategorise:async (category)=>{
         const response = await fetch(`${BASE_URL}/products/category/${category}`)
        return response.json();
     }

}