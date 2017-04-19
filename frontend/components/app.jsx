import React from 'react';
import NavBar from './nav_bar';

const App = ({children}) => (
  <div>
    <NavBar children={children} />
    {children}
  </div>
);

export default App;
