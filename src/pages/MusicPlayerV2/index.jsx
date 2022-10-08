import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { getUserAuth } from './redux/actions';
import { PageContainer } from '@ant-design/pro-layout';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserAuth());
  // }, [dispatch]);

  return (
    <PageContainer>
      <Header />
      {/* <Home /> */}
    </PageContainer>
  );
}

export default App;
