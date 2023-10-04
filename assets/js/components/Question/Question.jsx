import React, { useEffect } from 'react';

const Question = ({ question, handleAnswerSelection, questionResponses }) => {
  // Utilisez la map pour parcourir les options de la question
  const options = question.options.map((option) => {
    const isChecked = questionResponses[question.questionId]?.includes(option);
    return (
      <div key={`${question.questionId}-${option}`}>
        <label>
          <input
            type="checkbox"
            name={`question-${question.questionId}`}
            value={option}
            onChange={() => handleAnswerSelection(question.questionId, option)}
            checked={isChecked} // Utilisez isChecked pour définir l'état cochée/décochée
          />
          {option}
        </label>
      </div>
    );
  });

  return (
    <div key={`question-${question.questionId}`}>
      <p>{question.text}</p>
      {options}
    </div>
  );
};

export default Question;
