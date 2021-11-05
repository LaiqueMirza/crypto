import React from 'react';
import { Switch, Route, Link,HashRouter } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <HashRouter>
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/crypto/">
              <Homepage />
            </Route>
            <Route exact path="/crypto/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/crypto/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/crypto/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/crypto/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/crypto/">Home</Link>
          <Link to="/crypto/exchanges">Exchanges</Link>
          <Link to="/crypto/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
  </HashRouter>

);

export default App;
