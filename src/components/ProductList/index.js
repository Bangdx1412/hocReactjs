import { products } from "../../data/product";
import ProductItem from "./ProductItem";
function ProductList() {
  console.log(products);

  return (
    <>
      <div className="product__list">
        {products.map((item) => (
          <ProductItem key={item.id} item={item}/>
        ))}
      </div>
    </>
  );
}
export default ProductList;
