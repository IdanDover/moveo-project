import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useState } from 'react';

function CodeBlockCard() {
  const navigate = useNavigate();
  const [codeBlockName, setCodeBlockName] = useState('Code');
  return (
    <div className="flex flex-col items-center max-w-sm m-2 overflow-hidden rounded shadow-lg">
      <img className="w-full" src="https://picsum.photos/200" alt="picture" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold dark:text-stone-300">
          Code Exercise
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 mb-1 ">
        <Button
          variation={'small'}
          onClick={() => {
            navigate(`/code-block/${codeBlockName}`);
          }}
        >
          <span>Join</span>
        </Button>
      </div>
    </div>
  );
}

export default CodeBlockCard;
