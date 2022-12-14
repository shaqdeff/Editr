import React from 'react';
import {
  FiClock,
  FiArrowDownLeft,
  FiCheckCircle,
  FiCloud,
} from 'react-icons/fi';
import { HiDotsVertical } from 'react-icons/hi';
import rabbit from '../../assets/rabbit.png';
import TextEditor from '../TextEditor/TextEditor';
import './EditorPage.css';

const EditorPage = () => {
  return (
    <div className="App">
      <div className="header-container">
        {/* Menu bar icons */}
        <div className="menu-bar">
          {/* Left */}
          <div className="left-icons">
            <div className="profile-icon">P</div>{' '}
            <span className="pipe-separator"></span>
            <div className="clock-icon">
              {' '}
              <FiClock style={{ fontSize: '16px', color: '#8f8f8f' }} /> 0min
            </div>
            <span className="pipe-separator"></span>
            <div className="rabbit-container">
              <img className="rabbit-icon" src={rabbit} alt="rabbit" />
            </div>
            <span className="pipe-separator arrow"></span>
            <div className="arrow-icon">
              <FiArrowDownLeft style={{ fontSize: '18px', color: '#8f8f8f' }} />
              0
            </div>
          </div>
          {/* Right */}
          <div className="right-icons">
            <div className="check-icon">
              <FiCheckCircle style={{ fontSize: '18px', color: '#8f8f8f' }} />
            </div>
            <div className="cloud-icon">
              <FiCloud style={{ fontSize: '18px', color: '#529d78' }} />
            </div>
            <div className="dots-icon">
              <HiDotsVertical style={{ fontSize: '20px', color: '#000' }} />
            </div>
          </div>
        </div>

        <h1 className="heading">Front-end developer test project</h1>
        <hr className="underline" />
        <p className="instruction">
          Hey there! 👋 You can add content below. Type / then 1 to create H1
          text. Hit 'Return or Enter' after typing in your text.
        </p>
      </div>
      <TextEditor />
    </div>
  );
};

export default EditorPage;
