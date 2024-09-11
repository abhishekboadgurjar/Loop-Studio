import React from "react";
import Vr from "../assets/images/desktop/image-interactive.jpg";
const VR = () => {
  return (
    <div className="vr">
      <div className="vr-text">
        <h1>THE LEADER IN INTERACTIVE VR</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
      <div className="vr-image">
        <img src={Vr} alt="" />
      </div>
    </div>
  );
};

export default VR;
