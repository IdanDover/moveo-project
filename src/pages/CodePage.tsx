import { useNavigate, useParams } from "react-router-dom";
import useSocket from "../libs/useSocket";
import { useDispatch, useSelector } from "react-redux";
import { changeCode, changeRoomName, getCode } from "../redux/codeBlockSlice";
import useIsLoading from "../hooks/useIsLoading";
import Loader from "../components/Loader";
import CodeBlock from "../features/codeBlock/CodeBlock";

function CodePage() {
  const code = useSelector(getCode);
  const dispatch = useDispatch();
  const { joinRoom, sendCode } = useSocket();
  const navigate = useNavigate();
  const isLoading = useIsLoading();
  const { room } = useParams();

  if (isLoading) {
    return <Loader />;
  }

  if (!room) {
    navigate("/lobby");
    return;
  }

  joinRoom(room);

  dispatch(changeRoomName(room));

  return (
    <div>
      <CodeBlock sendCode={sendCode} />
    </div>
  );
}

export default CodePage;
