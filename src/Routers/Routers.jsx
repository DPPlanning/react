import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Component/Main/Login/Login';
import Main from '../Component/Main/Main';
import Stat from '../Component/Main/Stat/Stat';
import Client from '../Component/Main/Client/Client';
import Lookup from '../Component/Main/Lookup/Lookup';
import AppLayout from '../Layout/AppLayout';
import LookupClient from '../Component/Main/LookupClient/LookupClient';
import StatAPI from '../Component/Main/API/StatAPI/StatAPI';
import StatAd from '../Component/Main/Stat/StatAd/StatAd';
import SignUp from '../Component/Main/SignUp/SignUp';
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Main />} />
          <Route path='/stat' element={<Stat />} />
          <Route path='/stat/:key' element={<StatAd />} />
          <Route path='/API/:key' element={<StatAPI />} />
          <Route path='/client' element={<Client />} />
          <Route path='/lookup' element={<Lookup />} />
          <Route path='/lookup/client' element={<LookupClient />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/develop/sign/up/nick' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;