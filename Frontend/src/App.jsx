import { useState } from 'react'
import './App.css'
import router from './router/router'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      {router}
    </Router>
      
  
  )
};

export default App;
