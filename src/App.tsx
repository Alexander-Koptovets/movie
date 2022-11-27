import React, { FC } from 'react';

import { Route, Routes } from 'react-router';

import { Welcome } from './components/Welcome';
import { SignIn } from '../src/components/SignIn';
import { SignUp } from '../src/components/SignUp';
import { Home } from './components/Home';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/home' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
