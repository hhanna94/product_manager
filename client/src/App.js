import './App.css';
import ProductDetail from './Components/ProductDetail';
import Main from './Views/Main';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import UpdateProduct from './Views/UpdateProduct';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products/:id/edit">
          <UpdateProduct />
        </Route>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
