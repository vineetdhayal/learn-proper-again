import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AlertComponent from './AlertComponent';

const App = () => {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrormessage] = useState(null);

  return (
    <div>
      <Header title={title}></Header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ }></Route>
          <Route path='/register' element={ }></Route>
          <Route path='/login' element={ }></Route>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrormessage}></AlertComponent>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
