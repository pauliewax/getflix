import React from 'react';
import { hashHistory } from 'react-router';
const Landing = () => (
  <div>
    <nav>
      <h1>GETFLIX-LOGO</h1>
      <button className="button" onClick={()=>hashHistory.push("/login")}>Sign In</button>
    </nav>

    <section>
      <h2>See what's next.</h2>
      <p>WATCH ANYWHERE. CANCEL ANYTIME.</p>
    </section>

  </div>
);

export default Landing;
