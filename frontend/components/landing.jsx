import React from 'react';
import { hashHistory } from 'react-router';

const Landing = () => (
  <div className="landing" >

    <section className="landingBlock">
      <h2>See what's next.</h2>
      <p>WATCH ANYWHERE. CANCEL ANYTIME.</p>
      <button className="button" onClick={()=>hashHistory.push("/signup")}>Join Free For a Month</button>
    </section>

    <img src ="http://www.pauliewax.com/wp-content/uploads/2017/04/landing.png" />
  </div>
);

export default Landing;
