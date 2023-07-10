import { Question } from '@/types/Question';

type NavigationProps = {
  handlePrevious: () => void,
  historyStack: number[],
  handleNext: () => void,
  currentQuestion: Question,
  showResult: boolean,
};

export const Navigation: React.FC<NavigationProps> = ({
  handlePrevious,
  historyStack,
  handleNext,
  currentQuestion,
  showResult,
}) => {
  return (
    <div className="navigation-buttons">
      <button 
        onClick={handlePrevious} 
        disabled={historyStack.length === 0}
        className="navigation-button"
      >
        Previous
      </button>
      <button 
        onClick={() => handleNext()} 
        disabled={currentQuestion?.isLast || showResult}
        className="navigation-button"
      >
        Next
      </button>
    </div>
  );
};
