import { memo, useEffect } from 'react';
import {
  changeCode,
  getCode,
  getSolution,
  getTitle,
} from '../../redux/codeExerciseSlice';
import { useDispatch, useSelector } from 'react-redux';
import useTheme from '../../hooks/useTheme';
import { Editor } from '@monaco-editor/react';
import { getRole } from '../../redux/userSlice';
import useSocket from '../../libs/useSocket';
import { getCodeExercise } from '../../services/codeExerciseService';
import { createPortal } from 'react-dom';
import BigSmileyFace from '../../components/BigSmileyFace';

const CodeEditor = memo(function CodeEditor() {
  const dispatch = useDispatch();
  const role = useSelector(getRole);
  const code = useSelector(getCode);
  const solution = useSelector(getSolution);
  const room = useSelector(getTitle);
  const { theme } = useTheme();
  const { joinRoom, leaveRoom, sendCode } = useSocket();

  useEffect(() => {
    joinRoom(room);

    const cleanUp = () => {
      leaveRoom(room);
    };

    return cleanUp;
  }, []);

  const handleChange = (value: string | undefined) => {
    if (!value) return;
    if (value === code) return;
    sendCode(room, role, value);
    dispatch(changeCode(value));
  };

  return (
    <div className="px-2 py-4 my-5 text-gray-800 bg-white rounded-md dark:bg-gray-800 dark:text-white">
      {code === 'solution' && createPortal(<BigSmileyFace />, document.body)}
      {normalizeString(code) === normalizeString(solution!) &&
        role === 'student' &&
        createPortal(<BigSmileyFace />, document.body)}
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
const normalizeString = (str: string) => str.replace(/\s/g, '');

export default CodeEditor;
export { loader };
