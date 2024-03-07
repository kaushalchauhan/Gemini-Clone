import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets"
import { Context } from "../../context/context";

const Sidebar = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);
  const handleSidebarToggle = () => {
    setSidebarShow(!sidebarShow);
  }
  const loadPrevPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }
  return <div className="sidebar"  >
    <div className="top">
      <div className="tooltip-container">
        <img className="menu" src={assets.menu_icon} alt="menu-icon" onClick={handleSidebarToggle} />
        <div className="tooltip">{sidebarShow ? "Collapse Menu" : "Expend Menu"}</div>
      </div>

      <div className="new-chat" onClick={() => newChat()}>
        <img src={assets.plus_icon} alt="" />
        {sidebarShow && <p>New Chat</p>}
      </div>
      <div className="recent">
        <p className="recent-title">
          {previousPrompt.map((item, index) => {
            return (
              <div className="recent-entry" key={index} onClick={() => loadPrevPrompt(item)}>
                <img src={assets.message_icon} alt="" />
                <div className="tooltip-container">
                  <p>{sidebarShow ? item && item.slice(0, 17) : item.slice(0, 12)}...</p>
                  <div className="tooltip">{item}</div>
                </div>

              </div>
            )
          })}
        </p>

      </div>
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
