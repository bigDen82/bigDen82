import Rstyle from "./Radius.module.css";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';


const Radius = (props) => {

 
  return (
    <div>
      <div className={Rstyle.boxnav}>
        <NavLink className={Rstyle.navlinc} to="/">Home</NavLink>
      </div>
      <div className={Rstyle.boxtext}><h1 >Полукруг:</h1></div>
      <div className={Rstyle.conteinerradius}></div>
    </div>
  );
  
};



export default Radius;
