import { useEffect, useState } from "react";
import "./UseEffect3.scss";

function UseEffect3() {
    const limit = 20;
  const [data, setData] = useState([]);
  const [quantityPage, setQuantityPage] = useState(0);
  const [pageActive,setPageActive] = useState(0);
  useEffect(() => {
    // https://dummyjson.com/products?skip=40&limit=20
    fetch(`https://dummyjson.com/products?skip=${limit*pageActive}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setQuantityPage(Math.ceil(data.total / limit))
      });
  }, [pageActive]);
  console.log(quantityPage);
  console.log([...Array(quantityPage)]); //tạo mảng
  const page = [...Array(quantityPage)];
  const handleClickPage = (e)=>{
    console.log(e);
    setPageActive(e)
    
  }
  return (
    <>
      <div className="product-list">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="product-content">
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.description}</p>
              <div className="info">
                <span className="price">${item.price}</span>
                <span className="rating">⭐ {item.rating}</span>
              </div>
              <div className="brand">{item.brand}</div>
            </div>
          </div>
        ))}
      </div>
      <ul className="pagination">
       
        {page.map((_,index)=>(
             <li key={index} onClick={()=>{handleClickPage(index)}}>{index+1}</li>
        ))}
      </ul>
    </>
  );
}

export default UseEffect3;
