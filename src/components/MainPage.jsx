import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="main">
      <div className="section-1">
        <div className='info-1'>
          <h2>YOGA</h2>
          <Link id='classes' to="">Classes</Link>
          <Link id='private' to="">Private</Link>
        </div>
      </div>

      <div className="section-2">
        <div className='info-2'>
          <h2>REIKI</h2>
          <Link to="">Book</Link>
        </div>
      </div>
    </div>
  );
}
