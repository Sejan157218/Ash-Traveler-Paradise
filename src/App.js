import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Addplaces from './Pages/Admin/Addplaces/Addplaces';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import AllOrders from './Pages/Admin/AllOrders/AllOrders';
import MyOrder from './Pages/MyOrder/MyOrder';
import AuthProvider from './Pages/Context/AuthProvider';
import Login from './Pages/Share/Login/Login';
import Header from './Pages/Share/Header/Header';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Share/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import AboutPage from './Pages/AboutPage/AboutPage';
import Contactus from './Pages/ContactUS/Contactus';
import Gallery from './Pages/Gallery/Gallery';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Link to="/">
            Home
          </Link>
          <Link to="/addplaces">
            Add places
          </Link>
          <Link to="/orders">
            Orders
          </Link>
          <Link to="/myorders">
            My Orders
          </Link>
          <Link to="/login">
            Login
          </Link>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/places/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/addplaces">
              <Addplaces></Addplaces>
            </Route>
            <Route path="/addplaces">
              <Addplaces></Addplaces>
            </Route>
            <Route path="/aboutus">
           <AboutPage></AboutPage>
            </Route>
            <Route path="/orders">
              <AllOrders></AllOrders>
            </Route>
            <Route path="/contact">
             <Contactus></Contactus>
            </Route>
            <Route path="/blogs">
             <Blogs></Blogs>
            </Route>
            <Route path="/gallery">
            <Gallery></Gallery>
            </Route>
            <PrivateRoute path="/myorders">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        
      </AuthProvider>

    </div>
  );
}

export default App;
