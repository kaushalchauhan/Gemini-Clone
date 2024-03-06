import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets"

const Sidebar = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarShow(!sidebarShow);
  }
  return <div className="sidebar"  >
    <div className="top">
      <div className="tooltip-container">
        <img className="menu" src={assets.menu_icon} alt="menu-icon" onClick={handleSidebarToggle} />
        <div className="tooltip">{sidebarShow ? "Collapse Menu" : "Expend Menu"}</div>
      </div>

      <div className="new-chat">
        <img src={assets.plus_icon} alt="" />
        {sidebarShow && <p>New Chat</p>}
      </div>
      {sidebarShow && <div className="recent">
        <p className="recent-title">
          Recent
        </p>
        <div className="recent-entry">
          <img src={assets.message_icon} alt="" />
          <p>What is React..</p>
        </div>
      </div>}
    </div>
    <div className="bottom">
      <div className="bottom-item recent-entry">
        <img src={assets.question_icon} alt="" />
        {sidebarShow && <p>Help</p>}
      </div>
      <div className="bottom-item recent-entry">
        <img src={assets.history_icon} alt="" />
        {sidebarShow && <p>Activity</p>}
      </div>
      <div className="bottom-item recent-entry">
        <img src={assets.setting_icon} alt="" />
        {sidebarShow && <p>Settings</p>}
      </div>
    </div>
  </div>;
};

export default Sidebar;
