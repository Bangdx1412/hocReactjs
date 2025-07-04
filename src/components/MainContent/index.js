function MainContent() {
  let name = "Đỗ Bằng";
  const css = {
    // color: "white",
    // backgroundColor: "red",
  };
  return (
    <>
      <div className="box">
        <div className="test" style={{ color: "red" }}>
          Xin chào {name}
        </div>
        <div className="test" style={css}>
          Xin chào {name}
        </div>
      </div>
    </>
  );
}
export default MainContent;
