import Rstyle from "./Clock.module.css";
import { NavLink } from "react-router-dom";
import React  from 'react';
import Img from './Clock.jpg'


const Clock = (props) => {

  return (
    <div >
      <div className={Rstyle.boxnav}>
        <NavLink className={Rstyle.navlinc} to="/">На Главную</NavLink>
      </div> 
      <div className={Rstyle.boxtext}><h1 >Аналоговые часы:</h1></div>
      <div className={Rstyle.boxclock}>
      <img src={Img} alt=''/>
        <div className={Rstyle.clockbox}>
          <div className={Rstyle.hour}>
            <div className={Rstyle.hourarrow} style={{transform: `rotateZ(${props.hourRatation*360}deg)`}}></div>
          </div>
          <div className={Rstyle.minutes}>
            <div className={Rstyle.minutesarrow} style={{transform: `rotate(${props.minutesRatation*360}deg)`}}></div>
          </div>
          <div className={Rstyle.second}>
            <div className={Rstyle.secondsarrow} style={{transform: `rotate(${props.secondRatation*360}deg)`}}></div>
          </div>  
          <div></div>
          <div></div>
          <div></div>
        
        </div>
      </div>
    </div>
  );
  
};


export default Clock;
