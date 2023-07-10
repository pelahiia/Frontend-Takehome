import { useState } from 'react';
import { Question } from '@/types/Question';
import React from 'react';
import { Button } from './Button';

type Props = {
  question: Question,
  handleNext: (answer: string) => void, 
}

export const QuestionComponent: React.FC<Props> = ({ 
  question, 
  handleNext
}) => {
  const [inputDateValue, setDateInputValue] = useState<string>();
  const [inputNumberValue, setInputNumberValue] = useState<string>();
  const [inputTextValue, setInputTextValue] = useState<string>("");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value.toString();
    setDateInputValue(answer);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value.toString();
    const questionId = question.id;

    if (questionId === 5) {
      setInputNumberValue(answer);
    } else if (questionId === 6) {
      setInputTextValue(answer);
    }
  };

  const handleCustomSubmit = async () => {
    let answer: string = '';
    if (question.inputType === 'number') {
      answer = inputNumberValue || '';
    } else if (question.inputType === 'text') {
      answer = inputTextValue || '';
    } else if (question.inputType === 'date') {
      answer = inputDateValue  || '';
    }

    handleNext(answer);
  };

  return (
    <div className="question-card">
      <div className="question">{question.text}</div>
      {question.options ? (
        <div className="answer-options">
          {question.options.map((option) => (
            <div
              key={option.id}
              className="answer-card"
              onClick={() => handleNext(option.text)}
            >
              {option.text}
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="answer-option">
            <div className="answer-option-container">
              {question.inputType === "date" && (
                <input
                  type="date"
                  onChange={handleDateChange}
                  value={inputDateValue ?? ''}
                  className="answer-option-input"
                />
              )}
              {question.inputType === "number" && (
                <input
                  type="number"
                  onChange={onInputChange}
                  value={inputNumberValue}
                  className="answer-option-input"
                />
              )}
              {question.inputType === "text" && (
                <input
                  type="text"
                  onChange={onInputChange}
                  value={inputTextValue}
                  className="answer-option-input"
                />
              )}
            </div>
            <Button
              handleSubmit={handleCustomSubmit}
            />
        </div>
        </>
      )}
    </div>
  );
};