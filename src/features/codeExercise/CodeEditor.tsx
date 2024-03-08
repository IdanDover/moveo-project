import { memo } from 'react';
import { getCode, getTitle } from '../../redux/codeExerciseSlice';
import { useSelector } from 'react-redux';
import useTheme from '../../hooks/useTheme';
import { Editor } from '@monaco-editor/react';
import { getRole } from '../../redux/userSlice';
import useSocket from '../../libs/useSocket';
import { getCodeExercise } from '../../services/codeExerciseService';

const CodeEditor = memo(function CodeEditor() {
  const role = useSelector(getRole);
  const code = useSelector(getCode);
  const room = useSelector(getTitle);
  const { theme } = useTheme();
  const { joinRoom, sendCode } = useSocket();

  joinRoom(room);

  const handleChange = (value: string | undefined) => {
    if (!value) return;
    if (value === code) return;
    sendCode(room, value);
  };

  return (
    <div className="px-2 py-4 my-5 text-gray-800 bg-white rounded-md dark:bg-gray-800 dark:text-white">
      <Editor
        height="60vh"
        width="70vw"
        language="javascript"
        defaultLanguage="javascript"
        theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
        value={code}
        onChange={handleChange}
        options={{
          quickSuggestions: false,
          readOnly: role === 'instructor',
        }}
      />
    </div>
  );
});

const loader = async ({ params }: any) => {
  const { room } = params;
  const codeBlocks = await getCodeExercise(room, { findBy: 'slug' });
  return codeBlocks.data;
};

export default CodeEditor;
export { loader };
