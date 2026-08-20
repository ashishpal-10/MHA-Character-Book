import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import Landing from './components/Landing';
import Section2 from './components/Section.jsx';

import CharacterList from './components/Skiils/CharacterList.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
const App = () => {

  useGSAP(() => {
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      // console.log(e.clientX,e.clientY);
      // console.log((e.clientX/window.innerWidth-0.5)*40);
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 2.5}%`,
      });

      gsap.to(".character ", {
        x: xMove,
      })

      gsap.to(".bg ", {
        x: xMove * 1.7,
      })

    })

  })


  return (
    <>
      <div className="w-full min-h-screen overflow-hidden">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList />} />
        </Routes>
        
      </div>

    </>
  )
}

export default App