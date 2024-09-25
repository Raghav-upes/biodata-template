import React, { useState } from 'react';
import Document from './Document';
import TemplateCreameAndWhite from './TemplateCreameAndWhite';
import TemplateDarkBlue from './TemplateDarkBlue';
import ImgDarkBlue from '../Images/RedTemplate.png';
import ImgCreame from '../Images/CreameTemplate.png';

export default function Template() {
  const [myTemp, SetMyTemp] = useState("x");

  return (
    <div className="main-container">
      <div className="main-content">
        {myTemp === "x" ? <TemplateCreameAndWhite /> : <TemplateDarkBlue />}
      </div>
      <div className="sidebar">
        <button onClick={() => SetMyTemp("x")} className='sidebar-btn'>
          <img src={ImgCreame} alt="Creame Template" />
        </button>
        <button onClick={() => SetMyTemp("y")} className='sidebar-btn'>
          <img src={ImgDarkBlue} alt="Dark Blue Template" />
        </button>
      </div>
    </div>
  );
}
