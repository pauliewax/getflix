import React from 'react';
import AuthForm from './authForm';

const App = ({children}) => (
  <div>
    <h1>Definitely not Bench BnB</h1>
    <AuthForm />
    {children}
  </div>
);

export default App;
