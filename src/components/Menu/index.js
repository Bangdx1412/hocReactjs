function Menu() {
  const arrayMenu = ["Trang chủ", "Sản phẩm", "Tin Tức", "Liên hệ"];
  return (
    <>
      {arrayMenu.map((item, index) => (<li key={index}>{item}</li>))}
    </>
  );
}
export default Menu;
