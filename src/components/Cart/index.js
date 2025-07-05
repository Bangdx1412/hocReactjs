
import { useState } from "react";
import "./Cart.scss"
function Cart() {
    const giaCodinh = 120000;
    // let quantity = 1
    const [quantity,setQuantity] = useState(1);
    const handleChange = (e)=>{
        const updateQuantity = parseInt(e.target.value)
        setQuantity(updateQuantity)
    }
  return (
    <>
      <table className="cart">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Giày thể thao nam cao cấp</td>
            <td>
              <input onChange={handleChange} defaultValue={quantity} type="number" min={1} />
            </td>
            <td>{giaCodinh}đ</td>
            <td>{quantity*giaCodinh}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default Cart;
