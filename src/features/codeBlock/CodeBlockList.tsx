import CodeBlockCard from "./CodeBlockCard";
import { getAllCodeBlocks } from "../../services/codeBlockService";
import { useLoaderData } from "react-router-dom";
import Loader from "../../components/Loader";
import { CodeBlock } from "../../models/codeBlockModel";
import useIsLoading from "../../hooks/useIsLoading";

function CodeBlockList() {
  const codeBlocks = useLoaderData() as CodeBlock[];
  const isLoading = useIsLoading();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 m-2 sm:grid-cols-4">
      {codeBlocks.map((codeBlock) => (
        <CodeBlockCard key={codeBlock.title} block={codeBlock} />
      ))}
    </div>
  );
}

const loader = async () => {
  const codeBlocks = await getAllCodeBlocks();
  return codeBlocks.data;
};

export default CodeBlockList;
export { loader };
