import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NextStepButtonProps {
  onClick?: () => void;
}

const NextStepButton: React.FC<NextStepButtonProps> = ({ onClick }) => {
  return (
    <button
      className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
      onClick={onClick}
    >
      <span className="mr-2">Next Step</span>
      <span className='btn-icon'>
        <ChevronRight className="h-5 w-5" />
      </span>
    </button>
  );
};

export default NextStepButton;