import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import AboutPage from "./aboutPage";
import Gallery from "./gallery";
import Portfolio from "./portfolio";
import Animation from "./animation";
import Beauty from "./portfolio_beauty";
import Events from "./portfolio_events";
import Fashion from "./portfolio_fashion";
import Pg from "./portfolio_pg";
import Buddha from "./portfolio_buddha";
import Buddha2 from "./portfolio_buddha2";
import Product from "./portfolio_product";
import Contact from './contact';

export default function Routing() {
  return( 
      <BrowserRouter>
      <Routes>
          <Route path="" exact element={<Animation/>}/>
          <Route path="/about" exact element={<AboutPage/>}/>
          <Route path="/portfolio" exact element={<Portfolio/>}/>
          <Route path="/portfolio/food" exact element={<Gallery/>}/>
          <Route path="/portfolio/product" exact element={<Product/>}/>
          <Route path="/portfolio/events" exact element={<Events/>}/>
          <Route path="/portfolio/photoGallery" exact element={<Pg/>}/>
          <Route path="/portfolio/fashion" exact element={<Fashion/>}/>
          <Route path="/portfolio/beauty" exact element={<Beauty/>}/>
          <Route path="/portfolio/travel" exact element={<Buddha/>}/>
          <Route path="/portfolio/landscape" exact element={<Buddha2/>}/>
          <Route path="/ContactMe"exact element ={<Contact/>}/>
         

      </Routes>
      </BrowserRouter>
    );
}
