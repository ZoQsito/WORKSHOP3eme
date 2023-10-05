import Axios from "axios";

function findAll(){
    return Axios
        .get("http://127.0.0.1:8000/api/tags")
        .then(response =>response.data['hydra:member'])
}

function find(id){
    return Axios
        .get("http://localhost:8000/api/tags/" + id)
        .then(response => response.data);
}

function deleteTag(id){
    return Axios
        .delete("http://127.0.0.1:8000/api/tags/" + id)
}

function update(id, tag){
    return Axios
    .put("http://localhost:8000/api/tags/" + id , tag);
}

function create(tag){
    return Axios
    .post("http://localhost:8000/api/tags", tag);
}

export default{
    findAll,
    delete : deleteTag,
    find,
    update,
    create
}