import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import activiteAPI from "../services/activiteAPI";

const ActivitesPage = (props) => {
  const [activites, setActivites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  //permet de récupérer les customers
  const fetchActivites = async () => {
    try {
      const data = await activiteAPI.findAll();
      setActivites(data);
    } catch (error) {
      toast.error("Les activités n'ont pas été chargés");
    }
  };

  useEffect(() => {
    fetchActivites();
  }, []);

  //gestion de la suppression d'un customer
  const handleDelete = async (id) => {
    const originalActivites = [...activites];

    setActivites(activites.filter((activites) => activites.id !== id));

    try {
      await activiteAPI.delete(id);
      toast.success("L'activité a bien été supprimé");
    } catch (error) {
      setActivites(originalActivites);
      toast.error("La suppression de l'activité n'a pas pu fonctionner");
    }
  };
  //Gestion du changement de page
  const handlePageChange = (page) => setCurrentPage(page);

  //gestion de la recherche
  const handleSearch = ({ currentTarget }) => {
    setSearch(currentTarget.value);
    setCurrentPage(1);
  };

  const itemsPerPage = 10;

  const filteredActivite = activites.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) 
  );
  //pagination des données
  const paginatedActivite = Pagination.getData(
    filteredActivite,
    currentPage,
    itemsPerPage
  );

  return (
    <>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <h1>Liste des Activités</h1>
        <Link to="/activites/new" className="btn btn-primary">
          Ajouter une Activité
        </Link>
      </div>

      <div className="form-group" style={{ paddingBottom: "20px" }}>
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          className="form-control"
          placeholder="Rechercher..."
        />
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titre</th>
            <th>Ville</th>
            <th>Code Postal</th>
            <th>Date Début</th>
            <th>Date Fin</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedActivite.map((activite) => (
            <tr key={activite.id}>
              <td>{activite.id}</td>
              <td>
                <Link
                  to={"/activites/" + activite.id}
                  style={{ textDecoration: "none" }}
                >
                  {activite.title}
                </Link>
              </td>
              <td>{activite.ville}</td>
              <td>{activite.codePostal}</td>
              <td>{activite.startDate}</td>
              <td>{activite.endDate}</td>
              <td>
                <button
                  onClick={() => handleDelete(activite.id)}
                  className="btn btn-sm btn-danger"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {itemsPerPage < filteredActivite.length && (
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          length={filteredActivite.length}
          onPageChanged={handlePageChange}
        />
      )}
    </>
  );
};

export default ActivitesPage;