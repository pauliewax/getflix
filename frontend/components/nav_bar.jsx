import React from 'react';
import { hashHistory } from 'react-router';

const NavBar = () => (
  <div>
    <nav className="navBar">
      <img className="navLogo" src="https://vignette4.wikia.nocookie.net/smurfs/images/a/a1/Netflix-logo.png/revision/latest?cb=20150508223333" />
      <button className="button" onClick={()=>hashHistory.push("/login")}>Sign In</button>
    </nav>
  </div>
);

export default NavBar;
