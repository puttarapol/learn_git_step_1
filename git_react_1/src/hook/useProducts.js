
import { useEffect , useState } from "react";
import {api} from '../services/api' ;

export const useProduct = () => {
    const [product , setProducts] = useState([]);
    const [ loading , setLoading ] = useState(true);
    const [ error , setError] = useState(null);

    useEffect ( () =>{
        const featchProducts = async () => {
            try {
                setLoading(true);
                const data = await api.getProducts();
                setProducts(data.products)
            } catch (error) {
                setError(error.maessage);
            } finally {
                setLoading(false);
            }
        }
        featchProducts();
    },[])
    return { product , loading , error};
};