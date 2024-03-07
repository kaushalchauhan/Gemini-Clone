import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets"
import { Context } from "../../context/context";

const Sidebar = () => {

  const { onSent, previousPrompt, setRecentPrompt, newChat, handleSidebarToggle, sidebarShow } = useContext(Context);

  const loadPrevPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }
  return <div className="sidebar"  >
    <div className="top">
      <div className="tooltip-container">
        <img className="menu" src={assets.menu_icon} alt="menu-icon" onClick={handleSidebarToggle} />
        <img className="menu-mobile" src={assets.menu_icon} alt="menu-icon" onClick={() => {
          const sidebar = document.querySelector('.sidebar');
          sidebar.style.display = sidebar.style.display === 'none' || "" ? 'block' : 'none';
        }} />
        <div className="tooltip">{sidebarShow ? "Collapse Menu" : "Expend Menu"}</div>
      </div>

      <div className="new-chat" onClick={() => newChat()}>
        <img src={assets.plus_icon} alt="" />
        {sidebarShow && <p>New Chat</p>}
      </div>

      <div className="recent">
        {previousPrompt.length > 0 ? (
          <span>
            Recent <sup>{previousPrompt.length <= 9 ? previousPrompt.length : '9+'}</sup>
          </span>
        ) : null}
        {sidebarShow && <p className="recent-title">
          {previousPrompt.slice(-9).map((item, index) => {
            return (
              <div className="recent-entry" key={index} onClick={() => loadPrevPrompt(item)}>
                <img src={assets.message_icon} alt="" />
                <div className="tooltip-container">
                  <p>{item && item.slice(0, 17)}...</p>
                  <div className="tooltip">{item}</div>
                </div>
              </div>
            )
          })}
        </p>}


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
