import React from 'react';
import NavBar from './nav_bar';
import Footer from './footer';

const App = ({children, location}) => {

  return(
    <div className="app" >
      <NavBar location={location} />
      {children}
      <Footer />
    </div>

  );
};

export default App;
