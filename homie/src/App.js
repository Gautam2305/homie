import React from 'react';
import './App.css';
import { HomePage } from './Frontend/pages/HomePage';
import {ServicePage} from './Frontend/pages/ServicePage'
// I'm importing ServicePage just to check 
import Signup from './Frontend/pages/signup';
import Login from './Frontend/pages/login';
import { RouterPath } from './routes';
import { ServiceProducerPage } from './Frontend/pages/ServiceProducerPage';

function App() {
  return (
    <div className="App">
      <RouterPath>
        <HomePage/>
        <ServicePage/>
        <Login/>
        <Signup/>
        <ServiceProducerPage/>
      </RouterPath>
    </div>
  );
}

export default App;
