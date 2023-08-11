import useCounter from '../hooks/use-counter';
import classes from './Backward.module.css';

const BackwardCounter = () => {
  const counter = useCounter(false);

  return <section className={classes.section}>{counter}</section>;
};

export default BackwardCounter;
