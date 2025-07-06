import { useEffect, useState } from "react";
import "./UseEffect2.scss";

function UseEffect2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      });
  }, []);

  return (
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
  );
}

export default UseEffect2;
