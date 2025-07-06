import Header from "../Header";
import { createContext } from "react";
export const MenuContext = createContext();

function Layout() {
  const menus = ["Trang chu", "Contact", "Lien He", "San pham"];
  return (
    <>
      <MenuContext.Provider value={menus}>
        <Header />
      </MenuContext.Provider>
      <div>Main</div>
      <div> Footer</div>
    </>
  );
}
export default Layout;
