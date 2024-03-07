import React, { useContext } from 'react'
// import { Github_User_Img } from '../../utils/constants';
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from '../../context/context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, input, setInput, setSidebarShow } = useContext(Context);
  const handleCardClick = (prompt) => {
    setInput(prompt);
    onSent(prompt);
  };
  const handleSidebarToggle = () => {
    setSidebarShow((prevSidebarShow) => !prevSidebarShow);

  };
  return (
    <div className='main'>
      <div className="nav">
        <img className="menu" src={assets.menu_icon} alt="menu-icon" onClick={() => {
          const sidebar = document.querySelector('.sidebar');
          sidebar.style.display = 'block';
          setSidebarShow(true);
        }} />
        <p>Gemini</p>
        <img className='user-profile-img' src={assets.kaushal_img} alt="user-img" onError={(e) => {
          e.target.src = assets.user_icon;
        }} />
      </div>
      <div className="main-container">
        {!showResult ? <>
          <div className="greet">
            <p>Hello, KK.</p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card" onClick={() => handleCardClick("What’s the reaction to and impact of autonomous vehicles")}>
              <p>What’s the reaction to and impact of autonomous vehicles</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card" onClick={() => handleCardClick("Brainstorm ways to make a dish more delicious")}>
              <p>Brainstorm ways to make a dish more delicious</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card" onClick={() => handleCardClick("Help me pick a movie to watch based on a genre")}>
              <p>Help me pick a movie to watch based on a genre</p>
              <img src={assets.code_icon} alt="" />
            </div>
            <div className="card" onClick={() => handleCardClick("Help me understand American football")}>
              <p>Help me understand American football</p>
              <img src={assets.message_icon} alt="" />
            </div>
          </div></> : <div className='result'>
          <div className="result-title">
            <img src={assets.kaushal_img} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ? <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
          </div>
        </div>}

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here' value={input} onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSent()
              }
            }} onChange={(e) => {
              setInput(e.target.value)
            }} />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input && <img src={assets.send_icon} alt="sent-btn" onClick={() => onSent()} />}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses.
            <br />
            Gemini-inspired, creation by Kaushal ❤️
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main