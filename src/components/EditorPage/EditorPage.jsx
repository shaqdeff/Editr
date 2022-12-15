import React from 'react';
import {
  FiClock,
  FiArrowDownLeft,
  FiCheckCircle,
  FiCloud,
  FiUnlock,
} from 'react-icons/fi';
import { HiDotsVertical } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { TfiBook } from 'react-icons/tfi';
import { RxDoubleArrowRight } from 'react-icons/rx';
import rabbit from '../../assets/rabbit.png';
import './EditorPage.css';

const EditorPage = () => {
  return (
    <div className="App">
      <div className="navigation-container">
        <div className="left-side">
          <div className="two-arrows">
            <RxDoubleArrowRight
              style={{ fontSize: '20px', color: '#7e838f', fontWeight: '500' }}
            />
          </div>
          <TfiBook style={{ fontSize: '18px', color: '#7e838f' }} />
          <div className="main-text">Main</div>
          <span className="slash-separator"></span>
          <div className="started-text">Getting started</div>
          <span className="slash-separator"></span>
          <div className="frontend-text">Front-end developer test proje...</div>
        </div>

        <div className="right-side">
          <div className="lock-icon">
            <FiUnlock style={{ fontSize: '18px', color: '#878c97' }} />
          </div>
          <div className="editing-text">Editing</div>
          <span className="pipe-separator"></span>
          <div className="publish-text">Publish Space</div>
          <div className="down-arrow">
            <IoIosArrowDown style={{ fontSize: '22px', color: '#426fae' }} />
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default EditorPage;
