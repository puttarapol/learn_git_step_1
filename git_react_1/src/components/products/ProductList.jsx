
import { useProduct } from "../../hook/useProducts";
import ProductCard from "./ProductCard";

const ProductList = ({onviewDetail}) =>{
    const { product , loading , error} = useProduct();

    if(loading) return <div className="loading"> กำลังโหลด </div>
    if (error)  return <div className="error"> เกิดข้อผิดพลาด </div>

    return(
        <div className="product-list">
            <h2>สินค้าทั้งหมด</h2>
            <div className="product-grid">
                {console.log(product)}
                {product.map( p =>(
                    <ProductCard 
                      key={p.id}
                      product={p}
                      onViewDetail={onviewDetail}
                    />
                )  )}
            </div>
        </div>
    )
}
export default ProductList;