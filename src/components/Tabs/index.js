import { useEffect, useState } from "react";

function Tabs() {
  const [data, setData] = useState([]);
  const [tabs, setTabs] = useState("products");
  useEffect(() => {
    fetch(`https://dummyjson.com/${tabs}`)
      .then((res) => res.json())
      .then((data) => setData(data[tabs]));
  }, [tabs]);
  console.log(data);
const handleTabs = (e)=>{
    setTabs(e)
}
  return (
    <>
      <div
        className="tabs"
        style={{
          display: "flex",
          padding: "10px 20px",
          justifyContent: "space-between",
          minWidth: "500px",
          maxWidth: "750px",
        }}
      >
        <div className="tabs__item" onClick={()=>{handleTabs("products")}}>product</div>
        <div className="tabs__item" onClick={()=>{handleTabs("users")}}>user</div>
        <div className="tabs__item" onClick={()=>{handleTabs("posts")}}>post</div>
      </div>
      <div className="tabs__content">
        {data.map((item,index)=>
        (
            <li key={index}>
              {index} -  {item.title || item.firstName}
            </li>
        )
        )}
      </div>
    </>
  );
}
export default Tabs;
