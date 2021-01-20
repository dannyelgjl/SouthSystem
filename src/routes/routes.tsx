import React from 'react';
// Router-dom
import { Switch, Route } from 'react-router-dom';
// Context
import { FavoritesBooksProvider } from '../hooks/FavoritesBooks';
// Componentes
import Home from '../pages/Home';
import Profile from '../pages/Profile';


const Routes: React.FC = () => (
  <Switch>
    <FavoritesBooksProvider>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
    </FavoritesBooksProvider>
  </Switch>
)

export default Routes;