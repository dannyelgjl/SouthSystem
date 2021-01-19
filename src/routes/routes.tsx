import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

import { BookProvider } from '../context/BookContext';

const Routes: React.FC = () => (
  <Switch>
    <BookProvider>
      <Route path="/" exact component={Home} />
    </BookProvider>
  </Switch>
)

export default Routes;