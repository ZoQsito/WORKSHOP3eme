import Axios from 'axios';
import React, {useState, useContext} from 'react';
import { toast } from 'react-toastify';
import Field from '../components/forms/Field';
import AuthContext from '../contexts/AuthContext';
import authAPI from '../services/authAPI';


const LoginPage = ({history}) => {

    const { setIsAuthenticated } = useContext(AuthContext)

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })


    const [error, setError] = useState("");



    const handleChange = (event) => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;

        setCredentials({...credentials, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await authAPI.authenticate(credentials);
            setError("");
            setIsAuthenticated(true);
            toast.success("Vous êtes Connecté 😄")
            history.replace("/");
        } catch (error) {
            setError("Aucun Compte ne possède cette adresse ou alors les informations ne correspondent pas !");
            toast.error("Une erreur est Survenue")
        }
    }

    return ( <>
    

    <h1>Connexion à l'application</h1>&nbsp;

    <form onSubmit={handleSubmit}>
        <Field label="Adresse email" name="username" value={credentials.username} onChange={handleChange} placeholder="Adresse email de connexion" error={error} />
        &nbsp;
        <Field label="Mot de Passe" name="password" value={credentials.password} onChange={handleChange} error={error} type="password" />
        &nbsp;
        <div className="form-group">
            <button type='submit' className="btn btn-primary">Connexion</button>
        </div>
    </form>
    
    </> 
    
    );
}
 
export default LoginPage;