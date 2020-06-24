// Dependencies
import React from 'react';
import { Route } from 'react-router-dom';

// Resources
import Layout from './components/Layout';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Product from './components/Product';

import './custom.css';

const App = () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={ProductList} />
    <Route exact path="/products/:productId" component={Product} />
  </Layout>
);

export default App;
