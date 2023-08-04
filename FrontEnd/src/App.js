import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const [progress, setProgress] = useState(0) //ye generalized  isiliye yaha likhe h
 
    return (
      <div>
        <Router>
        <NavBar/> 
   <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path="/"  element={<News setProgress={setProgress} apiKey={0} key="general" pageSize={pageSize} country="in" category="general"/>}/>

          <Route exact path="/business"element={<News setProgress={setProgress} apiKey={1} key="business" pageSize={pageSize} country="in" category="business"/>}/>

          <Route exact path="/entertainment"element= {<News setProgress={setProgress} apiKey={2} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>

          <Route exact path="/sports"element= {<News setProgress={setProgress} apiKey={3} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>

          <Route exact path="/health" element= {<News setProgress={setProgress} apiKey={4} key="health" pageSize={pageSize} country="in" category="health"/>}/>
           
          <Route exact path="/science"element= {<News setProgress={setProgress} apiKey={5} key="science" pageSize={pageSize} country="in" category="science"/>}/>
        </Routes>
        </Router>
      </div>
    )
 
}

export default App;