import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { CodeExerciseType } from '../../models/codeExerciseModel';
import { useDispatch } from 'react-redux';
import { loadCodeExercise } from '../../redux/codeExerciseSlice';

type Props = {
  exercise: CodeExerciseType;
};

function CodeExerciseCard({ exercise }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(loadCodeExercise(exercise));
    navigate(`/code-exercise/${exercise.slug}`);
  };

  return (
    <div className="flex flex-col items-center max-w-sm m-2 overflow-hidden rounded shadow-lg">
      <img className="w-full" src="https://picsum.photos/200" alt="picture" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold dark:text-stone-300">
          {exercise.title}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 mb-1 ">
        <Button variation={'small'} onClick={handleClick}>
          <span>Join</span>
        </Button>
      </div>
    </div>
  );
}

export default CodeExerciseCard;
