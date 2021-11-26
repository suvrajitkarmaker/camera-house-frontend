import logo from './logo.svg';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Authentications/Login/Login';
import Shipping from './Components/Shipping/Shipping';
import Notfound from './Components/Notfound/Notfound';
import Registration from './Components/Authentications/Registration/Registration';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/Authentications/PrivateRoute/PrivateRoute';
import AllProducts from './Components/AllProducts/AllProducts';
import SingleProduct from './Components/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <AllProducts></AllProducts>
            </Route>
            <Route exact path="/products/:productid">
              <SingleProduct></SingleProduct>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact  path="/shipping/:productid">
              <Shipping></Shipping>
            </PrivateRoute>
            
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
