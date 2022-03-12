import { useState } from "react";
import sidebarLinks from "../data/sidebarData.json";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  const [active, setActive] = useState(false);
  return (
    <section className="sidebar">
      <div className="sidebar__container">
        <h1 className="sidebar__title">admin panel</h1>
        <ul className="sidebar__links">
          {sidebarLinks.map((link, index) => {
            return (
              <Link
                to={link.route}
                className={`sidebar__links--link ${
                  window.location.pathname === link.route && "active"
                } `}
                key={index}
                onClick={() => setActive(!active)}
              >
                <ion-icon name={link.icon}></ion-icon>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
