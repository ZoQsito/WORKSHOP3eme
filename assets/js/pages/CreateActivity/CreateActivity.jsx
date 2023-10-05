import React, { useState, useEffect } from 'react';
import Field from '../../components/forms/Field';
import './style.css';

const CreateActivity = (props) => {
    const [credentials, setCredentials] = useState({
        title: "",
        description: "",
        date: "",
        city: "",
        locality: "",
        tags_ids: ""
    });

    const handleChange = (event) => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;

        setCredentials({ ...credentials, [name]: value });
    };

    const [error, setError] = useState("");

    return (
        <section id="create-activity">
            <div className="form-activity-wrapper">
                
            
            <div className="form-group">
                <label htmlFor="title" className="label">Nom de l'activité</label>
                <Field
                    type="text"
                    id="title"
                    name="title"
                    value={credentials.title}
                    onChange={handleChange}
                    placeholder="Ex : Soirée belote"
                    error={error}
                    className="input"
                />
            </div>


            <div className="form-group">
                <label htmlFor="description" className="label">Description (300 caractères maximum)</label>
                <textarea
                    id="description"
                    name="description"
                    value={credentials.description}
                    onChange={handleChange}
                    placeholder="Ajoutez une description..."
                    className="textarea"
                    maxLength="300"
                />
            </div>
            </div>
        </section>

    )
};

export default CreateActivity;