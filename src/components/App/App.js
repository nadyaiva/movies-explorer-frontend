import React from 'react';
import './App.css';
import Page from '../Page/Page';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Page/>
    </BrowserRouter>
  );
}

export default App;
