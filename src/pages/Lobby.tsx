import CodeBlockList from '../features/codeExercise/CodeExerciseList';

function Lobby() {
  return (
    <div>
      <h3 className="m-2 text-2xl font-bold text-center text-emerald-600 dark:text-emerald-300">
        Pick a Coding Exercise
      </h3>
      <CodeBlockList />
    </div>
  );
}

export default Lobby;
