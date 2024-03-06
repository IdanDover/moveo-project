import LinkButton from '../components/LinkButton';

function page404() {
  return (
    <div className="p-4 m-2">
      <h2>Got lost?</h2>
      <LinkButton to={'/lobby'}>back to lobby</LinkButton>
    </div>
  );
}

export default page404;
