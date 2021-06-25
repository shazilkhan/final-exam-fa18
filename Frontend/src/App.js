import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/Landing";
import Products from "./components/products/Products";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <TopMenu />
        <div style={{ padding: "10px" }}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/contact-us" exact component={Contact} />
            <Route path="/contact-us" exact component={Contact} />
            <Route path="/products/new" component={NewProduct} />
            <Route path="/products/update/:id" component={UpdateProduct} />
            <Route path="/products/:page?" component={Products} />
            <Route path="/not-found" component={NothingFound} />
            <Route path="/" exact component={Landing} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
