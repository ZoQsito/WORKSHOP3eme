// Import des modules React nécessaires
import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import "./style.css";
import Field from "../../components/forms/Field";
import authAPI from "../../services/authAPI";
import AuthContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const LandingPage = (props) => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    setCredentials({ ...credentials, [name]: value });
  };

  const validateEmail = (email) => {
    // Validation de l'adresse e-mail avec un regex simple
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Validation du mot de passe (minuscule, majuscule, chiffre, caractère spécial, 8 caractères minimum)
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation de l'adresse e-mail
    if (!validateEmail(credentials.username)) {
      setErrors({ ...errors, username: "Adresse e-mail invalide" });
      return;
    } else {
      setErrors({ ...errors, username: "" });
    }

    // Validation du mot de passe
    if (!validatePassword(credentials.password)) {
      setErrors({ ...errors, password: "Mot de passe invalide" });
      return;
    } else {
      setErrors({ ...errors, password: "" });
    }

    try {
      await authAPI.authenticate(credentials);
      setError("");
      setIsAuthenticated(true);
      toast.success("Vous êtes Connecté 😄");
      history.replace("/");
    } catch (error) {
      setError(
        "Aucun Compte ne possède cette adresse ou alors les informations ne correspondent pas !"
      );
      toast.error("Une erreur est Survenue");
    }
  };

  return (
    <div className="landing-page">
      <div className="feature-box">
        <h2>Fonctionnalités du site</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          condimentum libero. Sed tincidunt fermentum tortor. Vestibulum nec
          volutpat libero.
        </p>
        <p>
          Curabitur nec euismod augue. Fusce sed justo eu arcu consectetur
          laoreet vel a libero. In hac habitasse platea dictumst.
        </p>
        <p>
          Quisque nec tristique justo. Morbi eget nisi quis justo dignissim
          lacinia vel non arcu. Donec non augue non urna tincidunt efficitur.
        </p>
      </div>
      <div className="box-primary">
        <div className="box">
          <h3>Déjà inscrit ?</h3>
          <p>Connectez-vous à votre compte :</p>
          <form onSubmit={handleSubmit}>
            <Field
              label="Adresse email"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Adresse email de connexion"
              error={error&&errors.username}
            />
            &nbsp;
            <Field
              label="Mot de Passe"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              error={error&&errors.password}
              type="password"
            />
            &nbsp;
            <button type='submit' className="btn btn-primary" >Connexion</button>
          </form>
        </div>
        <div className="box">
          <h3>Pas encore inscrit ?</h3>
          <p>Inscrivez-vous pour accéder à toutes nos fonctionnalités :</p>
          <button className="button" type="submit">
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
