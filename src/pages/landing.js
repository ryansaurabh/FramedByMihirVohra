import React from 'react';
import "./landing.css";
import BusinessCard from "./images/BusinessCard.jpg"

export default function Landing() {
  return(<>
   <div className="container">
    <div className="img">
     <img className='aboutImg' src={BusinessCard} alt="BusinessCard Inc. logo"/>
     </div>
   </div>
   </>
  )}
