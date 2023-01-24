import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from '../components/header';
import CreateTest from './create-test';
import PassTest from './pass-test';
const Main = () => {
  return (
    <div className='main'>
      <Header/>
      <Routes>
        <Route exact path='/' element={<CreateTest/>}/>
        <Route exact path='/test' element={<PassTest/>}/>
      </Routes>
    </div>
  ); 
};

export default Main;