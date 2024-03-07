import { changeCode, getCode, getRoomName } from '../../redux/codeBlockSlice';
import { useDispatch, useSelector } from 'react-redux';
import useTheme from '../../hooks/useTheme';
import 'highlight.js/styles/github.css';
import { Editor } from '@monaco-editor/react';
import { getRole } from '../../redux/userSlice';

type Props = {
  sendCode: Function;
};

function CodeEditor({ sendCode }: Props) {
  const dispatch = useDispatch();
  const role = useSelector(getRole);
  const room = useSelector(getRoomName);
  const code = useSelector(getCode);
  const { theme } = useTheme();

  const handleChange = (value: string | undefined) => {
    if (!value) return;
    dispatch(changeCode(value));
    sendCode(room, value);
  };

  return (
    <div className="p-4 m-5 text-gray-800 bg-white rounded-md dark:bg-gray-800 dark:text-white">
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
}

export default CodeEditor;
