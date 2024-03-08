import { useDispatch, useSelector } from 'react-redux';
import CodeEditor from '../features/codeExercise/CodeEditor';
import {
  getExplanation,
  getTitle,
  loadCodeExercise,
} from '../redux/codeExerciseSlice';
import { getRole } from '../redux/userSlice';
import { useLoaderData } from 'react-router-dom';
import { CodeExerciseType } from '../models/codeExerciseModel';
import useIsLoading from '../hooks/useIsLoading';
import Loader from '../components/Loader';
import LinkButton from '../components/LinkButton';

function CodePage() {
  const codeExercise = useLoaderData() as CodeExerciseType;
  const isLoading = useIsLoading();
  const dispatch = useDispatch();
  const title = useSelector(getTitle);
  const explanation = useSelector(getExplanation);
  const role = useSelector(getRole);

  if (isLoading) {
    return <Loader />;
  }

  dispatch(loadCodeExercise(codeExercise));

  return (
    <div className="mt-4">
      <h2 className="mx-auto text-3xl font-bold text-center text-stone-700 dark:text-stone-200">
        {title}
      </h2>
      <div className="flex items-center justify-between px-3 rounded-lg shadow-md text-emerald-600 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-800">
        <p className="py-2 my-3 text-lg font-semibold text-center ">
          your role is: {role}
        </p>
        <LinkButton to={'/lobby'}>back to lobby &rarr;</LinkButton>
      </div>
      <p className="py-2 my-3 text-lg text-stone-700 dark:text-stone-200">
        {explanation}
      </p>
      <CodeEditor />
    </div>
  );
}

export default CodePage;
