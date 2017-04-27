import React from 'react';
import NavBar from './nav_bar';

const App = ({children, location}) => {

  return(
    <div className="app" >
      <NavBar location={location} />
      {children}
    </div>

  );
};

export default App;
