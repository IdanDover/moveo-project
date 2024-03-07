import React from "react";
import { changeCode, getCode, getRoomName } from "../../redux/codeBlockSlice";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  sendCode: Function;
};

function CodeBlock({ sendCode }: Props) {
  const dispatch = useDispatch();
  const room = useSelector(getRoomName);
  const code = useSelector(getCode);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCode(e.target.value));
    sendCode(room, e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={code}
        onChange={handleChange}
        placeholder="code here"
      />
    </div>
  );
}

export default CodeBlock;
