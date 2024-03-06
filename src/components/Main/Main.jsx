import React from 'react'
import { Github_User_Img } from '../../utils/constants';
import { assets } from "../../assets/assets"
import "./Main.css"

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img className='user-profile-img' src={Github_User_Img} alt="user-img" onError={(e) => {
          e.target.src = assets.user_icon;
        }} />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>Hello, KK.</p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>What’s the reaction to and impact of autonomous vehicles</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm ways to make a dish more delicious</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Help me pick a movie to watch based on a genre</p>
            <img src={assets.code_icon} alt="" />
          </div>
          <div className="card">
            <p>Help me understand American football</p>
            <img src={assets.message_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main