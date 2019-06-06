import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Form from './components/form/form';
import Submit from './components/Submit';
import ProductDetails from './components/ProductDetails';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/form" component={Form} />
          <Route path="/submit" component={Submit} />
          <Route path="/details/:id" component={ProductDetails} />
          <Route path="*" render={() => <Redirect to='/' />} />
        </Switch>
      </div>
    );
  }
}

export default App;
