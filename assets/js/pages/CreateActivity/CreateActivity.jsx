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


                <section id="create-activity">
                    <div className="form-activity-wrapper">
                        <div className="form-group">
                            <label htmlFor="title" className="label-activity">Nom de l'activité</label>
                            <Field
                                type="text"
                                id="title"
                                name="title"
                                value={credentials.title}
                                onChange={handleChange}
                                placeholder="Ex : Soirée belote"
                                error={error}
                                className="input-activity"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description" className="label-activity">Description (300 caractères maximum)</label>
                            <textarea
                                id="description"
                                name="description"
                                value={credentials.description}
                                onChange={handleChange}
                                placeholder="Ajoutez une description..."
                                className="input-activity textarea-activity"
                                maxLength="300"
                            />
                        </div>

                        {/* Champ "date" */}
                        <div className="form-group">
                            <label htmlFor="date" className="label-activity">Date</label>
                            <Field
                                type="text"
                                id="date"
                                name="date"
                                value={credentials.date}
                                onChange={handleChange}
                                placeholder="Ex : 01/01/2023"
                                error={error}
                                className="input-activity"
                            />
                        </div>

                        {/* Champ "city" */}
                        <div className="form-group">
                            <label htmlFor="city" className="label-activity">Ville</label>
                            <Field
                                type="text"
                                id="city"
                                name="city"
                                value={credentials.city}
                                onChange={handleChange}
                                placeholder="Ex : Lille"
                                error={error}
                                className="input-activity"
                            />
                        </div>

                        {/* Champ "locality" */}
                        <div className="form-group">
                            <label htmlFor="locality" className="label-activity">Localité</label>
                            <Field
                                type="text"
                                id="locality"
                                name="locality"
                                value={credentials.locality}
                                onChange={handleChange}
                                placeholder="Ex : Quartier"
                                error={error}
                                className="input-activity"
                            />
                        </div>

                        {/* Champ "tags_ids" */}
                        <div className="form-group">
                            <label htmlFor="tags_ids" className="label-activity">Tags</label>
                            <Field
                                type="text"
                                id="tags_ids"
                                name="tags_ids"
                                value={credentials.tags_ids}
                                onChange={handleChange}
                                placeholder="Ex : Tag1, Tag2"
                                error={error}
                                className="input-activity"
                            />
                        </div>
                    </div>
                </section>

            </div>
        </section>

    )
};

export default CreateActivity;