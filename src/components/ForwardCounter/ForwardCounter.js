import useCounter from '../hooks/use-counter';
import classes from './Forward.module.css';

const ForwardCounter = () => {
 
  const counter = useCounter();

  return <section className={classes.section}>
    {counter}
  </section>;
};

export default ForwardCounter;
