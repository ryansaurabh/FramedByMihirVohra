import React from 'react';
import "./landing.css";
import BusinessCard from "./images/BusinessCard.jpg"
import LandingEnd from './landingEnd';

export default function Landing() {
  return(<div>
   <div className="container">
    <div className="img">
     <img className='aboutImg' src={BusinessCard} alt="BusinessCard Inc. logo"/>
     </div>
   </div>
 
     <LandingEnd/>
   
   </div>
  )}
