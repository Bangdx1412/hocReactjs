import { useEffect } from "react";

function UseEffect1() {
  let listItem = document.querySelectorAll("ul li");
  console.log("🚀 ~ UseEffect1 ~ listItem:", listItem);
  useEffect(() => {
    let listItem2 = document.querySelectorAll("ul li");
    console.log("🚀 ~ UseEffect1 ~ listItem:", listItem2);
  });
  return (
    <>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>
    </>
  );
}
export default UseEffect1;
