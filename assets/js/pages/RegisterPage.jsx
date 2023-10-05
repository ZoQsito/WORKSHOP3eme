import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import Field from "../components/forms/Field";
import usersAPI from "../services/usersAPI";
import organisationAPI from "../services/organisationAPI";

const RegisterPage = ({ history }) => {
  const [isOrga, setIsOrga] = useState(false);

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: "",
    telephone: "",
    ville: "",
    age: "",
    organisationId:"",
  });

  const [organisation, setOrganisation] = useState({
    ville: user.ville,
    codePostal:"",
    name:"",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
    setOrganisation({ ...organisation, [name]: value })
  };

  const handleToggleIsOrga = () => {
    setIsOrga(true);
    setUser({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      telephone: "",
      ville: "",
      age: "",
      organisationId:"",
    })
  };

  const handleDisableIsOrga = () => {
    setIsOrga(false);
    setUser({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      telephone: "",
      ville: "",
      age: "",
      organisationId:"",
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiErrors = {};
    if (user.password !== user.passwordConfirm) {
      apiErrors.passwordConfirm =
        "Votre Confirmation de Mot de Passe n'est pas comforme avec le Mot de Passe";
      setErrors(apiErrors);
      toast.error("Des erreurs dans votre Formulaire !😠");
      return;
    }

    console.log(user);

    try {
      await usersAPI.register(user);
      setErrors({});
      toast.success("Vous êtes Désormais Inscrit !😄");
      history.replace("/login");
    } catch (error) {
      console.log(error.response);

      const { violations } = error.response.data;

      if (violations) {
        violations.forEach((violations) => {
          apiErrors[violations.propertyPath] = violations.message;
        });
        setErrors(apiErrors);
      }
      toast.error("Des erreurs dans votre Formulaire !😠");
    }
  };

  const handleSubmitOrga = async (event) => {
    event.preventDefault();

    const apiErrors = {};
    if (user.password !== user.passwordConfirm) {
      apiErrors.passwordConfirm =
        "Votre Confirmation de Mot de Passe n'est pas comforme avec le Mot de Passe";
      setErrors(apiErrors);
      toast.error("Des erreurs dans votre Formulaire !😠");
      return;
    }

    const orgaResponse = await organisationAPI.create(organisation);


    const organisationID = orgaResponse.data.id;

    setUser({...user, organisationId:organisationID});

    console.log(user);

    // try {
    //   await usersAPI.register(user);
    //   setErrors({});
    //   toast.success("Vous êtes Désormais Inscrit en tant que Organisation !😄");
    //   history.replace("/login");
    // } catch (error) {
    //   console.log(error.response);

    //   const { violations } = error.response.data;

    //   if (violations) {
    //     violations.forEach((violations) => {
    //       apiErrors[violations.propertyPath] = violations.message;
    //     });
    //     setErrors(apiErrors);
    //   }
    //   toast.error("Des erreurs dans votre Formulaire !😠");
    // }
  };

  return (
    <>
      <h1>
        Inscription{" "}
        <button
          onClick={handleDisableIsOrga}
          className="btn btn-outline-primary"
        >
          Normal
        </button>
        <button
          onClick={handleToggleIsOrga}
          className="btn btn-outline-primary"
        >
          Organisation
        </button>
      </h1>

      <form>
        {(!isOrga && (
          <>
            <Field
              name="firstname"
              label="Prénom"
              placeholder="Votre Prénom"
              error={errors.firstname}
              value={user.firstname}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="lastname"
              label="Nom"
              placeholder="Votre Nom"
              error={errors.lastname}
              value={user.lastname}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="email"
              label="Email"
              placeholder="Votre Email"
              error={errors.email}
              value={user.email}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="telephone"
              label="Telephone"
              placeholder="Votre Téléphone"
              value={user.telephone}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="ville"
              label="Ville"
              placeholder="Votre Ville"
              value={user.ville}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="age"
              label="Age"
              placeholder="Votre Age"
              value={user.age}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="password"
              type="password"
              label="Password"
              placeholder="Votre Mot de Passe"
              error={errors.password}
              value={user.password}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="passwordConfirm"
              type="password"
              label="PasswordConfirm"
              placeholder="Comfirmer votre Mot de Passe"
              error={errors.passwordConfirm}
              value={user.passwordConfirm}
              onChange={handleChange}
            />
            &nbsp;
            <div className="mb-5 mt-4 form-group">
              <button
                type="submit"
                className="btn btn-outline-success"
                onClick={handleSubmit}
              >
                Inscription
              </button>
              <Link to="/login" className="btn btn-link">
                J'ai Déjà un Compte
              </Link>
            </div>
          </>
        )) || (
          <>
            <Field
              name="email"
              label="Email"
              placeholder="Votre Email"
              error={errors.email}
              value={user.email}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="name"
              label="Nom de l'organisation"
              placeholder="Nom de votre Organisation"
              value={organisation.name}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="telephone"
              label="Telephone"
              placeholder="Votre Téléphone"
              value={user.telephone}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="ville"
              label="Ville"
              placeholder="Votre Ville"
              value={user.ville}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="codePostal"
              label="Code Postal"
              placeholder="Votre Code Postal"
              value={organisation.codePostal}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="password"
              type="password"
              label="Password"
              placeholder="Votre Mot de Passe"
              error={errors.password}
              value={user.password}
              onChange={handleChange}
            />
            &nbsp;
            <Field
              name="passwordConfirm"
              type="password"
              label="PasswordConfirm"
              placeholder="Comfirmer votre Mot de Passe"
              error={errors.passwordConfirm}
              value={user.passwordConfirm}
              onChange={handleChange}
            />
            &nbsp;
            <div className="mb-5 mt-4 form-group">
              <button
                type="submit"
                className="btn btn-outline-success"
                onClick={handleSubmitOrga}
              >
                Inscription
              </button>
              <Link to="/login" className="btn btn-link">
                J'ai Déjà un Compte
              </Link>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default RegisterPage;
