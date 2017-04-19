import React from 'react';
import { hashHistory } from 'react-router';

const Landing = () => (
  <div className="landing" >

    <section className="landingBlock">
      <h2>See what's next.</h2>
      <p>WATCH ANYWHERE. CANCEL ANYTIME.</p>
      <button className="button" onClick={()=>hashHistory.push("/login")}>Sign In</button>
    </section>

    <img src="https://assets.nflxext.com/ffe/siteui/vlv2/1e1fc120-ce81-48e2-8229-514cd3e414e5/a8e0c04a-c030-420f-8c4f-d44910d28bbb/US-en-20170417-popsignuptwoweeks-perspective_alpha_website_large.jpg" />

  </div>
);

export default Landing;
