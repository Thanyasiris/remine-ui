import React from 'react';
import './App.css';
import Home from './pages/Home';
import NewMed from './pages/NewMed';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          
        </Route>
        <Route path='/addnewmed' element={<NewMed/>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
