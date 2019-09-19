import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import * as serviceWorker from './serviceWorker';
// Import your reducers and routes here
import Welcome from './Welcome';
import Header from './components/Header/Header';
import ingredientRoutes from './routes/ingredient';
import productRoutes from './routes/product';
import recipeRoutes from './routes/recipe';
import ingredientRecipeRoutes from './routes/recipeingredient';

const history = createBrowserHistory();
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    /* Add your reducers here */
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header></Header>
      <Switch>
        <Route path="/" component={Welcome} strict={true} exact={true}/>
        {ingredientRoutes}
        {productRoutes}
        {recipeRoutes}
        {ingredientRecipeRoutes}
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
