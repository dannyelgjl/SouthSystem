import React from 'react';
// Router-dom
import { Switch, Route } from 'react-router-dom';
// Context
import { BookProvider } from '../context/BookContext';
// Componentes
import Home from '../pages/Home';
import Profile from '../pages/Profile';


const Routes: React.FC = () => (
  <Switch>
    <BookProvider>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
    </BookProvider>
  </Switch>
)

export default Routes;