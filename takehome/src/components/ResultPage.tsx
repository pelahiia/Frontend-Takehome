import { useEffect } from 'react';
import { Answers } from '@/types/Answers';
import { questionObject } from '../../quizData/questions';
import moment from 'moment';

type Props = {
  answers: Answers,
  sendFormResult: (answers: Answers) => void,
};

export const ResultPage: React.FC<Props> = ({ answers, sendFormResult }) => {
  useEffect(() => {
    const shouldSendFormResult = questionObject.some(
      (question) => question.isLast
    );
  
    if (shouldSendFormResult) {
      sendFormResult(answers);
    }
    console.log(answers);
  }, []);

  const isFirstPath = (answers:Answers) => {
    return (answers[1].length + answers[2].length) % 2 === 0;
  };

  console.log(isFirstPath(answers))

  const changeData = () => {
    return isFirstPath(answers) ? 1 : 2;
  };

  const data = moment(answers[4]).format('MMM Do, YYYY')

  const resultTextSecondPath = `With ${+answers[5] + +changeData()} hours of restful sleep each night, your journey will lead you to ${answers[6]}. 💫🔮🪐`;
  const resultTextFirstPath = `In the warm embrace of ${answers[3]} or on ${data}, you will experience a moment of pure joy and fulfillment. 💫🔮🪐`;

  return (
    <div className="question-card">
        <div className="result-text">
          {isFirstPath(answers) ? resultTextFirstPath : resultTextSecondPath}
        </div>
    </div>
  )
}