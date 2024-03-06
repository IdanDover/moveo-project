import { useEffect, useState } from 'react';
import { CodeBlock } from '../../models/codeBlockModel';
import CodeBlockCard from './CodeBlockCard';
import { getAllCodeBlocks } from '../../services/codeBlockService';

function CodeBlockList() {
  const [codeBlocks, setCodeBlocks] = useState<CodeBlock[]>([]);

  //TODO: use a different fetching type
  useEffect(() => {
    const getCodeBlocks = async () => {
      if (codeBlocks.length > 0) {
        return;
      }
      const blocks = (await getAllCodeBlocks()).data;
      setCodeBlocks(blocks);
      console.log(blocks);
    };

    getCodeBlocks();
  }, [codeBlocks]);

  return (
    <div className="grid grid-cols-1 gap-4 m-2 sm:grid-cols-4">
      <CodeBlockCard />
      <CodeBlockCard />
      <CodeBlockCard />
      <CodeBlockCard />
    </div>
  );
}

export default CodeBlockList;
