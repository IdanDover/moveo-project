import { getAllCodeExercises } from '../../services/codeExerciseService';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../components/Loader';
import { CodeExerciseType } from '../../models/codeExerciseModel';
import useIsLoading from '../../hooks/useIsLoading';
import CodeExerciseCard from './CodeExerciseCard';

function CodeBlockList() {
  const codeExercises = useLoaderData() as CodeExerciseType[];
  const isLoading = useIsLoading();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 m-2 sm:grid-cols-4">
      {codeExercises.map((codeExercise) => (
        <CodeExerciseCard key={codeExercise.title} exercise={codeExercise} />
      ))}
    </div>
  );
}

const loader = async () => {
  const codeBlocks = await getAllCodeExercises();
  return codeBlocks.data;
};

export default CodeBlockList;
export { loader };
