import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./bootstrap";
import Navbar from "./js/components/Navbar";
import PrivateRoute from "./js/components/PrivateRoute";
import AuthContext from "./js/contexts/AuthContext";
import CustomerPage from "./js/pages/CustomerPage";
import CustomersPage from "./js/pages/CustomersPage";
import HomePage from "./js/pages/HomePage";
import InvoicePage from "./js/pages/InvoicePage";
import InvoicesPage from "./js/pages/InvoicesPage";
import LoginPage from "./js/pages/LoginPage";
import RegisterPage from "./js/pages/RegisterPage";
import authAPI from "./js/services/authAPI";
import "./styles/app.css";

authAPI.setup();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authAPI.isAuthenticated()
  );

  const NavbarWithRouter = withRouter(Navbar);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <HashRouter>
        <NavbarWithRouter />
        <main className="container pt-5">
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/customers/:id" component={CustomerPage} />
            <PrivateRoute path="/invoices/:id" component={InvoicePage} />
            <PrivateRoute path="/customers" component={CustomersPage} />
            <PrivateRoute path="/invoices" component={InvoicesPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
      </HashRouter>
      <ToastContainer  position={toast.POSITION.BOTTOM_LEFT}/>
    </AuthContext.Provider>
  );
};
const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
