import { useSelector } from 'react-redux';
import CodeEditor from '../features/codeExercise/CodeEditor';
import { getExplanation, getTitle } from '../redux/codeExerciseSlice';

function CodePage() {
  const title = useSelector(getTitle);
  const explanation = useSelector(getExplanation);

  return (
    <div className="mt-4">
      <h2 className="py-2 my-3 text-3xl font-bold text-center text-stone-700 dark:text-stone-200">
        {title}
      </h2>
      <p className="py-2 my-3 text-lg text-stone-700 dark:text-stone-200">
        {explanation}
      </p>
      <CodeEditor />
    </div>
  );
}

export default CodePage;
