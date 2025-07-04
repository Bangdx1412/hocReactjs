import { FaFacebookSquare } from "react-icons/fa";
function NavigationMenu() {
  const handleClick = (e) => {
    console.log("🚀 ~ handleClick ~ e:", e);
    console.log("🚀 ~ handleClick ~ Lấy ra event đó:", e.target);
  };
  const changeHalde = (e) => {
    console.log(e.target.value);
  };
  const handleFocus = (e) => {
    e.target.classList.add("thaymaune");
    console.log(e.target);
  };
  const handleBlur = (e) => {
    e.target.classList.remove("thaymaune");
  };
  const hanldeSubmit = (e)=>{
    // Ngăn chặn sự kiện mặc định
    e.preventDefault();
    alert("Gửi lên server " +  e.target[0].value)
  }
  return (
    <>
      <div className="box">
        NavigationMenu
        <form onSubmit={hanldeSubmit}>
          {/* Sự kiện onChange và Focus*/}
          <input
            className="active"
            type="text"
            onBlur={handleBlur}
            onChange={changeHalde}
            onFocus={handleFocus}
          />
          {/* Sự kiện click */}
          <button onClick={handleClick}>
            <FaFacebookSquare></FaFacebookSquare> Click Me!
          </button>
        </form>
      </div>
    </>
  );
}
export default NavigationMenu;
