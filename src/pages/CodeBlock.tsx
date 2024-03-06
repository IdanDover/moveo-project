import { useNavigate, useParams } from 'react-router-dom';
import useSocket from '../libs/socket';
import { useDispatch } from 'react-redux';
import { changeRoomName } from '../redux/codeBlockSlice';

function CodeBlock() {
  const dispatch = useDispatch();
  const { joinRoom } = useSocket();
  const navigate = useNavigate();
  const { room } = useParams();

  if (!room) {
    navigate('/lobby');
    return;
  }

  joinRoom(room);

  dispatch(changeRoomName(room));

  return <div>CodeBlock</div>;
}

export default CodeBlock;
