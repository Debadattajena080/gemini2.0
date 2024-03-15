import React from "react";
import Rigthbar from "./RightsideBar/rigthbar.jsx";
// import Leftbar from "./LeftsideBar/leftbar.jsx";

const index = () => {
  return (
    <div className="flex">
      <div className="">
        {/* <Leftbar /> */}
      </div>
      <div className="flex-1">
        <Rigthbar />
      </div>
    </div>
  );
};

export default index;
