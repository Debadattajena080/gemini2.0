import React, { useState } from "react";
import Rigthbar from "./RightsideBar/rigthbar.jsx";
import Leftbar from "./LeftsideBar/leftbar.jsx";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex">
      <div className="">
        <Leftbar menuOpen={menuOpen} />
      </div>
      <div className="flex-1">
        <Rigthbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </div>
    </div>
  );
};

export default Index;
