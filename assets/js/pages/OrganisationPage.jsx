import React, { useState, useEffect } from "react";
import Field from "../components/forms/Field";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import organisationAPI from "../services/organisationAPI";

const OrganisationPage = ({}) => {
  const { id = "new" } = useParams();

  const [organisation, setOrganisation] = useState({
    name: "",
    ville: "",
    codePostal: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    ville: "",
    codePostal: "",
  });

  const [editing, setEditing] = useState(false);


  const fetchOrga = async (id) => {
    try {
      const { name, ville, codePostal } = await organisationAPI.find(id);
      setOrganisation({ name, ville, codePostal });
    } catch (error) {
      toast.error("L'organisation n'a pas pu être chargé");
    }
  };

  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      fetchOrga(id);
    }
  }, [id]);

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setOrganisation({ ...organisation, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      if (editing) {
        await organisationAPI.update(id, organisation);
        toast.success("L'organisation a bien été modifié");
        window.location.href = "/orga";
      } else {
        await organisationAPI.create(organisation);
        toast.success("L'organisation a bien été crée");
        window.location.href = "/orga";
      }
    } catch ({ error }) {
      toast.error("L'organisation n'a pas pu être créer");
    }
  };

  return (
    <>
      {(!editing && <h1>Ajout d'une Organisation</h1>) || (
        <h1>Modification d'une organisation</h1>
      )}

      <form>
        <Field
          name="name"
          label="Nom de l'organisation"
          placeholder="Nom de l'organisation"
          value={organisation.name}
          onChange={handleChange}
          error={errors.name}
        />
        &nbsp;
        <Field
          name="ville"
          label="Ville"
          placeholder="Ville de L'organisation"
          value={organisation.ville}
          onChange={handleChange}
          error={errors.ville}
        />
        &nbsp;
        <Field
          name="codePostal"
          label="Code Postal"
          placeholder="Code Postal de l'organisation"
          value={organisation.codePostal}
          onChange={handleChange}
          error={errors.codePostal}
        />
        &nbsp;
        <div className="form-group">
          <Link to="/orga" className="btn btn-success" onClick={handleSubmit}>
            Enregistrer
          </Link>
          <Link to="/orga" className="btn btn-link">
            Retour à la liste
          </Link>
        </div>
      </form>
    </>
  );
};

export default OrganisationPage;