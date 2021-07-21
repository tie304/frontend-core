import React, { useState } from "react";
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
  return (
    <div
      className={sideBarClass}
      onMouseEnter={(e) => setCollapsed(false)}
      onMouseLeave={(e) => setCollapsed(true)}
    >
      <div className={contentItemClass}>
        <div className="sidebar__content-item">
          <span className="sidebar__content-item-icon">
            <i class="fa fa-home fa-2x"></i>
          </span>
          <div className={contentItemActionClass}>Dashboard</div>
        </div>

        <div className="sidebar__content-item">
          <span className="sidebar__content-item-icon">
            <i class="fa fa-laptop fa-2x"></i>
          </span>
          <div className={contentItemActionClass}>User Management</div>
        </div>
        <div className="sidebar__content-item">
          <span className="sidebar__content-item-icon">
            <i class="fa fa-list fa-2x"></i>
          </span>
          <div className={contentItemActionClass}>Email Templates</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
