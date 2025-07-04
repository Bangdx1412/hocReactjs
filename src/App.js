import "./App.css";
function App() {
  let name = "Đỗ Bằng";
  const css = {
    color: "white",
    backgroundColor: "red",
  };
  return (
    <>
      <div className="test" style={{ color: "red" }}>
        Xin chào {name}
      </div>
      <div className="test" style={css}>
        Xin chào {name}
      </div>
    </>
  );
}

export default App;
