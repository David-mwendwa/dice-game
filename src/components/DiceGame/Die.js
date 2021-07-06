import './Die.css';

const Die = ({ face, isRolling }) => {
  return (
    <i className={`Die fas fa-dice-${face} ${isRolling ? 'shaking' : ''}`}></i>
  );
};

export default Die;
