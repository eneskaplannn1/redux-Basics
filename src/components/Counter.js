import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment(5));
  };
  const DecrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      {showCounter && (
        <>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{counter} </div>
          <div>
            <button onClick={increaseHandler}>Increment</button>
            <button onClick={incrementHandler}>Increment 5</button>
            <button onClick={DecrementHandler}>Decrement</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
