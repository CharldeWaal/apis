import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import of components and pages
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { AllAPIsPage } from './pages/AllAPIsPage/AllAPIsPage';
import { CategoriesPage } from './pages/CategoriesPage/CategoriesPage';

import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/apis' element={<AllAPIsPage/>} />
        <Route path='/categories' element={<CategoriesPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
