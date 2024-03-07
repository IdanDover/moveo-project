import CodeBlockList from "../features/codeBlock/CodeBlockList";

function Lobby() {
  return (
    <div>
      <h3 className="m-2 text-2xl font-bold text-center text-blue-600 dark:text-blue-300">
        Pick a Coding Exercise
      </h3>
      <CodeBlockList />
    </div>
  );
}

export default Lobby;
