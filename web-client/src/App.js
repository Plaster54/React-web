import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './config/routes';
//styles
import './styles/sass/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <SubRoutes key={index} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
function SubRoutes(route) {
  console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;
