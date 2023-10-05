import React, { useState, useEffect } from "react";
import Field from "../components/forms/Field";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import activiteAPI from "../services/activiteAPI";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { format } from "date-fns";

const ActivitePage = ({}) => {
  const { id = "new" } = useParams();

  const [activite, setActivite] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    ville: "",
    codePostal: "",
  });

  const [editing, setEditing] = useState(false);

  const fetchActivite = async (id) => {
    try {
      const { title, description, startDate, endDate, ville, codePostal } =
        await activiteAPI.find(id);
      setActivite({
        title,
        description,
        startDate,
        endDate,
        ville,
        codePostal,
      });
    } catch (error) {
      toast.error("L'activité n'a pas pu être chargé");
    }
  };

  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      fetchActivite(id);
    }
  }, [id]);

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setActivite({ ...activite, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

      if (editing) {
        console.log(activite)
        await activiteAPI.update(id, activite);
        toast.success("L'activité a bien été modifié");
        window.location.href = "/#/activites";
      } else {
        console.log(activite)
        await activiteAPI.create(activite);
        toast.success("L'activité a bien été crée");
        window.location.href = "/#/activites";
      }
  };

  const handleDateChange = (newDate, target) => {
    const date = format(newDate.$d, "yyyy-MM-dd HH:mm:ss");

    if (target === "debut") {
      setActivite((prevActivite) => ({
        ...prevActivite,
        startDate: date,
      }));
    } else if (target === "fin") {
      setActivite((prevActivite) => ({
        ...prevActivite,
        endDate: date,
      }));
    }
  };

  return (
    <>
      {(!editing && <h1>Ajout d'une Activité</h1>) || (
        <h1>Modification d'une Activité</h1>
      )}

      <form onSubmit={handleSubmit}>
        <Field
          name="title"
          label="Titre de l'activité"
          placeholder="Titre de l'activité"
          value={activite.title}
          onChange={handleChange}
        />
        &nbsp;
        <Field
          name="description"
          label="Description de L'activité"
          placeholder="Description de L'activité"
          value={activite.description}
          onChange={handleChange}
        />
        &nbsp;
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Date et Heure de Début"
            onChange={(newDate) =>
              handleDateChange(newDate, "debut")
            }
          />
        </LocalizationProvider>
        &nbsp;
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Date et Heure de Fin"
            onChange={(newDate) =>
              handleDateChange(newDate, "fin")
            }
          />
        </LocalizationProvider>
        &nbsp;
        <div style={{ padding: 20 }}>
          <Field
            name="ville"
            label="Ville de L'activité"
            placeholder="Ville de l'activite"
            value={activite.ville}
            onChange={handleChange}
          />
        </div>
        &nbsp;
        <Field
          name="codePostal"
          label="Code Postal de L'activité"
          placeholder="Code Postal de l'activite"
          value={activite.codePostal}
          onChange={handleChange}
        />
        &nbsp;
        <div className="form-group">
          <Link
            to="/activites"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Enregistrer
          </Link>
          <Link to="/activites" className="btn btn-link">
            Retour à la liste
          </Link>
        </div>
      </form>
    </>
  );
};

export default ActivitePage;
