import React from 'react';

import { GlobalStyle } from './styles/global';
import { SignUp } from './pages/signUp';
import { Dashboard } from './pages/dashboard';

function App() {
  return (
    <>
      <Dashboard />
      <SignUp />
      

      <GlobalStyle/>
    </>
  );
}

export default App;
