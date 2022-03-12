import { useContext, useState, useEffect, useRef } from "react";
import adminContext from "../../context/use-context";
import "./navbar.css";
import Tooltip from "./Tooltip";

const useClickOutside = (handler) => {
  const domNode = useRef();
  useEffect(() => {
    const closeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", closeHandler);

    return () => document.removeEventListener("mousedown", closeHandler);
  }, []);

  return domNode;
};
const Navbar = () => {
  const [value, setValue] = useContext(adminContext);
  const [showTip, setShowTip] = useState(false);

  const domNode = useClickOutside(() => setShowTip(false));
  return (
    <header className={`header ${value.isDark && "dark"}`}>
      <div className="header__search">
        <input type="text" placeholder="Search..." />
        <ion-icon
          className="header__icons"
          name={`${!value.isDark ? "Search-outline" : "Search"}`}
        ></ion-icon>
      </div>

      <nav className={`nav`}>
        <div ref={domNode} className="nav__profile">
          <img
            src="/assets/images/avatar.jpg"
            alt=""
            onClick={() => setShowTip(!showTip)}
          />
          <span className="nav__name">Ellwood Bearward</span>
          {showTip && <Tooltip />}
        </div>

        <div className="nav__icons">
          <button className="nav__notifications">
            <ion-icon
              name={`${
                !value.isDark ? "notifications-outline" : "notifications"
              }`}
            ></ion-icon>
            <span className="nav__counter">12</span>
          </button>

          <button
            className="nav__colors"
            onClick={() => setValue({ ...value, isDark: !value.isDark })}
          >
            <ion-icon
              name={`${!value.isDark ? "contrast-outline" : "contrast"}`}
            ></ion-icon>
            <ion-icon
              name={`${!value.isDark ? "moon-outline" : "moon"}`}
            ></ion-icon>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
