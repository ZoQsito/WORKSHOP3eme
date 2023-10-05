import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './style.css';
import Question from '../../components/Question/Question';
import Carousel from '../../components/Carousel/Carousel';

const Questionnaire = (props) => {


    // async function getTAgs() {
    //     const tags = await TagsAPI.findAll();
    //     console.log(tags);
    // }

    // getTAgs();
    
    const { setIsAuthenticated } = useContext(AuthContext);

    const [questions, setQuestions] = useState([
        {
            questionId: 1,
            text: "Quelle couleur aimez-vous",
            options: ["rouge", "bleu", "vert", "jaune"],
            selectedOptions: []
        },
        {
            questionId: 2,
            text: "Quelle fruit aimez-vous",
            options: ["peche", "banane", "kiwi", "choco"],
            selectedOptions: []
        }
    ]);

    const [checkboxCheckedCount, setCheckboxCheckedCount] = useState(0);

    const [questionResponses, setQuestionResponses] = useState({});


    const handleAnswerSelection = (questionId, selectedOption) => {
        setQuestions((prevQuestions) => {
            return prevQuestions.map((question) => {
                if (question.questionId === questionId) {
                    if (!question.selectedOptions.includes(selectedOption)) {
                        question.selectedOptions.push(selectedOption);
                    } else {
                        // Retirez l'option si elle est décochée
                        question.selectedOptions = question.selectedOptions.filter(
                            (option) => option !== selectedOption
                        );
                    }
                }
                return question;
            });
        });
        setQuestionResponses((prevResponses) => ({
            ...prevResponses,
            [questionId]: questions.find((question) => question.questionId === questionId).selectedOptions,
        }));
    };

    useEffect(() => {
        // Calculer le nombre total de cases cochées à chaque changement dans `questions`
        const checkedCount = questions.reduce(
            (total, question) => total + question.selectedOptions.length,
            0
        );
        setCheckboxCheckedCount(checkedCount);
        console.log(checkedCount);
    }, [questions]);

    const handleSubmit = () => {
        // Créez un objet pour stocker les options sélectionnées par ID de réponse
        const selectedOptionsByResponseId = {};

        // Parcourez les questions
        questions.forEach((question) => {
            // Si des options ont été sélectionnées pour cette question
            if (question.selectedOptions.length > 0) {
                // Créez un nouvel ID de réponse unique
                const responseId = `response-${question.questionId}`;

                // Ajoutez les options à l'objet en utilisant l'ID de réponse comme clé
                selectedOptionsByResponseId[responseId] = question.selectedOptions;
            }
        });

        // Affichez l'objet dans la console
        console.log(selectedOptionsByResponseId);
    };

    return (
        <section id="questionnaire">
            <h2>Vos préférences</h2>
            <p>Découvrez des activités simples et amusantes, spécialement conçues pour vous !</p>
            <p>Si aucune de ces options ne vous tente, pas de panique! </p>
            <p>Il vous suffit de cliquer sur "thème suivant" pour découvrir encore plus d'activités palpitantes. </p>
            
            


            <Carousel>
                {questions.map((question) => (
                    <Question
                        key={`question-${question.questionId}`}
                        question={question}
                        handleAnswerSelection={handleAnswerSelection}
                        questionResponses={questionResponses}
                    />
                ))}
            </Carousel>
            <button className="submit-tags-btn" id="submit-tags"disabled={checkboxCheckedCount === 0} onClick={handleSubmit}>Je valide mes choix</button>
            <p>Cliquez sur "thème suivant" pour découvrir encore plus d'activités palpitantes. </p>
            <p>Vous devez avoir sélectionné au moins un thème pour pouvoir valider.</p>
        </section>
    );
};

export default Questionnaire;

