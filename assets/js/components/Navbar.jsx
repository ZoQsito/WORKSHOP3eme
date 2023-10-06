import React, { useContext } from "react";
import authAPI from "../services/authAPI";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import AuthContext from "../contexts/AuthContext";
import { toast } from "react-toastify";
import img from "./img/img.png";

const Navbar = ({ history }) => {
  const { isAuthenticated, setIsAuthenticated, isAdmin, isOrga } =
    useContext(AuthContext);

  const handleLogout = () => {
    authAPI.logout();
    setIsAuthenticated(false);
    toast.info("Vous êtes Déconnecté 😄");
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
      <img src={img} alt="logo" id="logo-banner" onClick={() => history.push("/")}></img>
        <NavLink className="navbar-brand" to="/">
          SolidActiv
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/activite">
                Activité
              </NavLink>
            </li>
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/questionnaire">
                    Questionnaire
                  </NavLink>
                </li>
              </>
            )}
            {isAdmin ||
              (isOrga && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/activites">
                      Gestion Activité
                    </NavLink>
                  </li>
                </>
              ))}
            {isAdmin && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/orga">
                    Gestion Orga
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav ml-auto">
            {(!isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Inscription
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="btn btn-outline-success">
                    Connexion
                  </NavLink>
                </li>
              </>
            )) || (
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-danger">
                  Déconnexion
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
