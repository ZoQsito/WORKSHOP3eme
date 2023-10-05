import React, { useEffect } from 'react';
import './style.css';

const Question = ({ question, handleAnswerSelection, questionResponses }) => {
  const options = question.options.map((option) => {
    const isChecked = questionResponses[question.questionId]?.includes(option);
    return (
      <div key={`${question.questionId}-${option}`} className="option">
        <label>
          {option}
        </label>
        <input
          type="checkbox"
          name={`question-${question.questionId}`}
          value={option}
          onChange={() => handleAnswerSelection(question.questionId, option)}
          checked={isChecked}
        />
      </div>
    );
  });

  return (
    <div key={`question-${question.questionId}`} className="question-container">
      {options}
    </div>
  );
};

export default Question;
