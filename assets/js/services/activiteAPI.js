import Axios from "axios";

function findAll(){
    return Axios
        .get("http://127.0.0.1:8000/api/activities")
        .then(response =>response.data['hydra:member'])
}

function find(id){
    return Axios
        .get("http://localhost:8000/api/activities/" + id)
        .then(response => response.data);
}

function deleteActivity(id){
    return Axios
        .delete("http://127.0.0.1:8000/api/activities/" + id)
}

function update(id, activity){
    return Axios
    .put("http://localhost:8000/api/activities/" + id , activity);
}

function create(activity){
    return Axios
    .post("http://localhost:8000/api/activities", activity);
}

export default{
    findAll,
    delete : deleteActivity,
    find,
    update,
    create
}