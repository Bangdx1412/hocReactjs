import "./App.css";
// Header
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content";
function App() {
  return (
    <>
      <Header />
      <NavigationMenu />
      <div className="main">
        <Content text="Content1" so={10} active={true} />
        <MainContent />
        <Content text="Content2" so={20} active={false}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
