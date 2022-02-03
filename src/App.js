import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Products from './Products.jsx';
import Contact from './Contact.jsx';
import Wall from './Wall.jsx';
import Floor from './Floor.jsx';
import Sanitary from "./Sanitary.jsx";
import Adhesive from "./Adhesive.jsx";
import Accesories from "./Accesories.jsx";
import Taps from "./Taps.jsx";
import Wallr from "./Wallr.jsx";
import Wallk from "./Wallk.jsx";
import Walle from "./Walle.jsx";
import Wallt from "./Wallt.jsx";
import Wallb from "./Wallb.jsx";
import Wallo from "./Wallo.jsx";
import Floor1 from "./Floor1.jsx";
import Floor2 from "./Floor2.jsx";
import Floor3 from "./Floor3.jsx";
import Floor4 from "./Floor4.jsx";
import Floor5 from "./Floor5.jsx";
import Floor6 from "./Floor6.jsx";
import Wt from "./Wt.jsx";
import Wb from "./Wb.jsx";
import It from "./It.jsx";
import Ta from "./Ta.jsx";
import Te from "./Te.jsx";
import Tg from "./Tg.jsx";
import St from "./St.jsx";
import Pt from "./Pt.jsx";
import Footer from "./Footer.jsx";
function App() {
  return (
  <>
      <Routes>
       <Route   path='/' element={<Home />} />
       <Route   path="/products" element={<Products />} />
       <Route   path="/about" element={<About />} />
       <Route   path="/contact" element={<Contact />} />
       <Route   path="/products/wall" element={<Wall />} />
       <Route   path="/products/floor" element={<Floor />} />
       <Route   path="/products/sanitary" element={<Sanitary />} />
       <Route   path="/products/adhesive" element={<Adhesive/>} />
       <Route   path="/products/Accesories" element={<Accesories />} />
       <Route   path="/products/taps" element={<Taps />} />
       <Route   path="/products/wall/8*12" element={<Wallr />} />
       <Route   path="/products/wall/10*15" element={<Wallk />} />
       <Route   path="/products/wall/12*24" element={<Wallt />} />
       <Route   path="/products/wall/12*18" element={<Walle />} />
       <Route   path="/products/wall/8*24"  element={<Wallb />} />
       <Route   path="/products/wall/10*20" element={<Wallo />} />
       <Route   path="/products/floor/10*10" element={<Floor1 />} />
       <Route   path="/products/floor/12*12" element={<Floor2 />} />
       <Route   path="/products/floor/16*16" element={<Floor3 />} />
       <Route   path="/products/floor/24*24" element={<Floor4 />} />
       <Route   path="/products/floor/24*48" element={<Floor5 />} />
       <Route   path="/products/floor/48*48" element={<Floor6 />} />
       <Route   path="/products/Sanitary/Western-Toilets" element={<Wt />} />
       <Route   path="/products/Sanitary/Wash-Basin" element={<Wb />} />
       <Route   path="/products/Sanitary/Indian-Toilets" element={<It />} />
       <Route   path="/products/adhesive/Tile-Adhesive" element={<Ta />} />
       <Route   path="/products/adhesive/Epoxy" element={<Te />} />
       <Route   path="/products/adhesive/Tile-Grout" element={<Tg />} />
       <Route   path="/products/taps/steel-taps" element={<St />} />
       <Route   path="/products/taps/pvc-taps" element={<Pt />} />
       <Route   path="*" element={<Navigate to='/' />} />
      </Routes>
      <div className="footer"><Footer /></div>
  </>
);
}

export default App;
