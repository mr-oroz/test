import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/header/header';
import CreateTest from './create-test/create-test';
import PassTest from './pass-test/pass-test';
import { MyContext } from '../context/MyContext/MyContext';

const Main = () => {
  const { questions } = useContext(MyContext);
  
  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions))
  }, [questions])

  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route exact path='/' element={<CreateTest />} />
        <Route exact path='/test' element={<PassTest />} />
      </Routes>
    </div>
  );
};

export default Main;