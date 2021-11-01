import './App.css';
import ProductDetail from './Components/ProductDetail';
import Main from './Views/Main';
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/products">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
