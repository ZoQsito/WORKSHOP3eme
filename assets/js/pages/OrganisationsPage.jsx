import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import organisationAPI from "../services/organisationAPI";

const OrganisationsPage = (props) => {
  const [organisation, setOrganisation] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  console.log(organisation)

  const fetchOrganisation = async () => {
    try {
      const data = await organisationAPI.findAll();
      setOrganisation(data);
    } catch (error) {
      toast.error("Les activités n'ont pas été chargés");
    }
  };

  useEffect(() => {
    fetchOrganisation();
  }, []);

  //gestion de la suppression d'un customer
  const handleDelete = async (id) => {
    const originalOrganisation = [...organisation];

    setOrganisation(organisation.filter((organisation) => organisation.id !== id));

    try {
      await organisationAPI.delete(id);
      toast.success("L'activité a bien été supprimé");
    } catch (error) {
      setActivites(originalOrganisation);
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

  const filteredOrganisation = organisation.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) 
  );
  //pagination des données
  const paginatedOrganisation = Pagination.getData(
    filteredOrganisation,
    currentPage,
    itemsPerPage
  );

  return (
    <>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <h1>Liste des Organisations</h1>
        <Link to="/orga/new" className="btn btn-primary" id ="add-org">
          Ajouter une Organisation
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
            <th>Nom</th>
            <th>Ville</th>
            <th>Code postal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrganisation.map((organisation) => (
            <tr key={organisation.id}>
              <td>{organisation.id}</td>
              <td>
                <Link
                  to={"/orga/" + organisation.id}
                  style={{ textDecoration: "none" }}
                >
                  {organisation.name}
                </Link>
              </td>
              <td>{organisation.ville}</td>
              <td>{organisation.codePostal}</td>
              <td>
                <button
                  onClick={() => handleDelete(organisation.id)}
                  className="btn btn-sm btn-danger"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {itemsPerPage < filteredOrganisation.length && (
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          length={filteredOrganisation.length}
          onPageChanged={handlePageChange}
        />
      )}
    </>
  );
};

export default OrganisationsPage;