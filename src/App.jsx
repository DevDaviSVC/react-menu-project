import { useState } from "react";
import MenuItems from "./components/MenuItems";
import menu from "./data";

const App = () => {
  const [displayingItems, setDisplayingItems] = useState(menu);

  const changeCategory = (e) => {
    setDisplayingItems(() => {
      if (e.target.innerText.toLowerCase() === "all") return menu;
      return menu.filter((item) => item.category === e.target.innerText.toLowerCase());
    })
  };

  return (
    <main>
      <div className="menu">
        <div>
          <h2 className="title">Our Menu</h2>
          <div className="title-underline"></div>
        </div>
        <div className="btn-container">
          <button className="btn" type="button" onClick={changeCategory}>All</button>
          <button className="btn" type="button" onClick={changeCategory}>Breakfast</button>
          <button className="btn" type="button" onClick={changeCategory}>Lunch</button>
          <button className="btn" type="button" onClick={changeCategory}>Shakes</button>
        </div>
        <MenuItems displayingItems={displayingItems} />
      </div>
    </main>
  );
};
export default App;
