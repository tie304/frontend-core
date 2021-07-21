import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  let sideBarClass = "sidebar";
  let contentItemClass = "sidebar__content";
  let contentItemActionClass = "sidebar__content-item-action";
  if (collapsed) {
    sideBarClass += " collapsed";
    contentItemClass += " collapsed";
    contentItemActionClass += " collapsed";
  }

  const SideBarItem = ({ title, icon, link }) => {
    return (
      <Link to={link}>
        <div className="sidebar__content-item">
          <span className="sidebar__content-item-icon">
            <i class={icon}></i>
          </span>
          <div className={contentItemActionClass}>{title}</div>
        </div>
      </Link>
    );
  };
  return (
    <div
      className={sideBarClass}
      onMouseEnter={(e) => setCollapsed(false)}
      onMouseLeave={(e) => setCollapsed(true)}
    >
      <div className={contentItemClass}>
        <SideBarItem title="Data" icon="fa fa-signal fa-2x" />
        <SideBarItem title="Users" icon="fa fa-users fa-2x" link="/users" />
        <SideBarItem title="Communication" icon="fa fa-envelope fa-2x" />
      </div>
    </div>
  );
};

export default Sidebar;
