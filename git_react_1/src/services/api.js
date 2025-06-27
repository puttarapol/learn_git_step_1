const BASE_URL ='https://dummyjson.com/';

export const api = {
getProducts: async( limit = 30 ,skip = 0  )=>{
    const respomse = await fetch (`${BASE_URL}productsl?limit=${limit}&skip=${skip}`);
},

getProduct:async(id)=>{
    const response = await fetch(`${BASE_URL}/products/${id}`);
    return response.json();
},
searchProducts:async(query)=>{
    const response = await fetch(`${BASE_URL}/products/search?=q${query}`);

    return response.json();
},

getCatgories:async(catgories) =>{
const response = await fetch(`${BASE_URL}/products/catgories`);

    return response.json();
},

getProductBycategory:async(category)=>{
 const response = await fetch(`${BASE_URL}/products/catgory${category}`);

    return response.json();   
}
}