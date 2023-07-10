import { useState } from 'react';
import { Answers } from '@/types/Answers';
import { ResultPage } from '../components/ResultPage';
import { Navigation } from '../components/Navigation';
import { questionObject } from '../../quizData/questions';
import { QuestionComponent } from '@/components/QuestionComponent';
import axios from 'axios';

  export const QuizComponent: React.FC = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [historyStack, setHistoryStack] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  const currentQuestion = questionObject.find((question) => question.id === currentQuestionId);

  const handleNext = (answer?: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionId]: answer ? answer : (currentQuestion?.defaultAnswer || ''),
    }));

    if (currentQuestion?.isLast) {
      setShowResult(true);
    };

    if(currentQuestion?.withPathing && !currentQuestion.isLast) {
      setCurrentQuestionId(((answers[1].length + (answer ?? currentQuestion.defaultAnswer).length) % 2 === 0) 
        ? currentQuestion?.path1NextId 
        : currentQuestion?.path2NextId);
    } else {
      setCurrentQuestionId(currentQuestion?.nextId || 0);
    }
      setHistoryStack((prev) => [...prev, currentQuestionId]);
  };

  const handlePrevious = () => {
    if (showResult) {
      setShowResult(false);
    };
  
    const previousQuestionId = historyStack[historyStack.length - 1];
    if (previousQuestionId !== undefined && questionObject.some((question) => question.id === previousQuestionId)) {
      setAnswers((prevAnswers) => {
        const rollbackAnswers = { ...prevAnswers };
        delete rollbackAnswers[previousQuestionId];
        return rollbackAnswers;
      });
      setHistoryStack((prev) => prev.slice(0, prev.length - 1));
      setCurrentQuestionId(previousQuestionId);
    };
  };

  const sendFormResult = async (answers: Answers) => {
    try {
      const response = await axios.post('/api/endpoint', answers);
      console.log("response:", response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="quiz-component">
      <>
        {currentQuestion 
          && !showResult 
          && (<QuestionComponent 
                question={currentQuestion} 
                handleNext={handleNext}
              />
        )}
        {showResult 
          && (<ResultPage 
              sendFormResult={sendFormResult}
              answers={answers}
              />)}
        {currentQuestion 
          && (<Navigation
            handlePrevious={handlePrevious}
            historyStack={historyStack}
            handleNext={handleNext}
            currentQuestion={currentQuestion}
            showResult={showResult}
          />
        )}
      </>
    </div>
  )
}

export default QuizComponent;
