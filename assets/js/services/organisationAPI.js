import Axios from "axios";

function findAll(){
    return Axios
        .get("http://127.0.0.1:8000/api/organisations")
        .then(response =>response.data['hydra:member'])
}

function find(id){
    return Axios
        .get("http://localhost:8000/api/organisations/" + id)
        .then(response => response.data);
}

function deleteOrganisation(id){
    return Axios
        .delete("http://127.0.0.1:8000/api/organisations/" + id)
}

function update(id, organisation){
    return Axios
    .put("http://localhost:8000/api/organisations/" + id , organisation);
}

function create(organisation){
    return Axios
    .post("http://localhost:8000/api/organisations", organisation);
}

export default{
    findAll,
    delete : deleteOrganisation,
    find,
    update,
    create
}