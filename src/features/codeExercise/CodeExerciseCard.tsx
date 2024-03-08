import Button from '../../components/Button';
import { CodeExerciseType } from '../../models/codeExerciseModel';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

type Props = {
  exercise: CodeExerciseType;
};

const levelColors = {
  easy: 'bg-green-500',
  intermediate: 'bg-yellow-500',
  hard: 'bg-orange-500',
  expert: 'bg-red-500',
};

function CodeExerciseCard({ exercise }: Props) {
  const highlightedCode = hljs.highlightAuto(exercise.code).value;

  return (
    <div className="flex flex-col items-center max-w-sm m-2 overflow-hidden rounded shadow-lg">
      <pre className="w-full p-4 overflow-auto bg-sky-100 dark:bg-slate-700 h-36 dark:text-stone-200">
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold dark:text-stone-300">
          {exercise.title}
        </div>
      </div>
      <div className="flex items-center justify-between px-6 pt-4 pb-2 mb-1 space-x-2">
        <Button variation={'small'} to={`/code-exercise/${exercise.slug}`}>
          <span>Join</span>
        </Button>
        <span
          className={`px-2 py-1 rounded-md text-white ${
            levelColors[exercise.level]
          }`}
        >
          {exercise.level}
        </span>
      </div>
    </div>
  );
}

export default CodeExerciseCard;
