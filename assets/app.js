import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./bootstrap";
import Navbar from "./js/components/Navbar";
import PrivateRoute from "./js/components/PrivateRoute";
import AuthContext from "./js/contexts/AuthContext";
import HomePage from "./js/pages/HomePage";
import LoginPage from "./js/pages/LoginPage";
import Questionnaire from "./js/pages/Questionnaire/Questionnaire";
import RegisterPage from "./js/pages/RegisterPage";
import authAPI from "./js/services/authAPI";
import "./styles/app.css";
import ActivitesPage from "./js/pages/ActivitesPage";
import OrganisationsPage from "./js/pages/OrganisationsPage";
import OrganisationPage from "./js/pages/OrganisationPage";
import ActivitePage from "./js/pages/ActivitePage";
import jwtDecode from "jwt-decode";
import AdminRoute from "./js/components/AdminRoute";
import LandingPage from "./js/pages/LandingPage/LandingPage";
import CreateActivity from "./js/pages/CreateActivity/CreateActivity";

authAPI.setup();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authAPI.isAuthenticated()
  );

  const NavbarWithRouter = withRouter(Navbar);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.roles && decodedToken.roles.includes("ADMIN")) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isAdmin,
      }}
    >
      <HashRouter>
        <NavbarWithRouter />
        <main className="container pt-5">
          <Switch>
<<<<<<< HEAD


            


=======
            <Route path="/questionnaire" component={Questionnaire} />
>>>>>>> 3807b795e2207c322268f17e8ca343368c8d600a
            <AdminRoute
              path="/orga/:id"
              component={OrganisationPage}
              isAdmin={isAdmin}
            />
            <Route path="/questionnaire" component={Questionnaire} />
            <Route path="/activite" component={ActivitesPage} />
            <Route path="/orga" component={OrganisationsPage} />
<<<<<<< HEAD
            <Route path="/createactivity" component={CreateActivity} />
      
=======
>>>>>>> 3807b795e2207c322268f17e8ca343368c8d600a
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </main>
      </HashRouter>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </AuthContext.Provider>
  );
};
const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
