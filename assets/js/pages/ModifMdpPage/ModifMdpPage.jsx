// Import des modules React nécessaires
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import Field from '../../components/forms/Field';
import AuthContext from '../../contexts/AuthContext';
import authAPI from '../../services/authAPI';
import './styles.css'
const ModifMdpPage = (props) => {
    const {setIsAuthenticated} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        password: "",
        newpassword: "",
        confirmnewpassword: "",
    });


    const handleChange = (event) => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;

        setCredentials({...credentials, [name]: value});
    };

    const [error, setError] = useState(
        {password: "",
        newpassword: "",
        confirmnewpassword: "",}
    );

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await authAPI.authenticate(credentials);
            setError("");
            setIsAuthenticated(true);
            toast.success("Votre mot de passe est modifié 😄");
            history.replace("/");
        } catch (error) {
            setError(
                "Votre ancien mot de passe ne correspond pas ou vos nouveau mots de passes ne sont pas les mêmes."
            );
            toast.error("Une erreur est Survenue");
        }
    };

    return (
        <div className="modifmdp-page">
            <div className="box-primary">
                <div className="box">
                    <h3>Voulez vous modifier votre mot de passe ?</h3>
                    <p>Mofifier celui-ci en renseignant votre ancien mot de passe, le nouveau et confirmez le !</p>
                    <form onSubmit={handleSubmit}>
                        <Field
                            label="Ancien mot de passe"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Votre ancien mot de passe"
                            error={error.password}
                        />
                        &nbsp;
                        <Field
                            label="Nouveau mot de passe"
                            name="newpassword"
                            value={credentials.newpassword}
                            onChange={handleChange}
                            placeholder="Votre nouveau mot de passe"
                            error={error.newpassword}
                        />
                        &nbsp;
                        <Field
                            label="Confirmez le nouveau mot de passe"
                            name="confirmnewpassword"
                            value={credentials.confirmnewpassword}
                            onChange={handleChange}
                            placeholder="Votre nouveau mot de passe confirmé"
                            error={error.confirmnewpassword}
                        />
                        &nbsp;
                        <button type='submit' className="btn btn-primary">Confirmer</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModifMdpPage;
