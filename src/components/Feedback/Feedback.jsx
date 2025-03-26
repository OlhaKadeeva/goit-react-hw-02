import css from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={css.result}>Good: {good}</p>
      <p className={css.result}>Neutral: {neutral}</p>
      <p className={css.result}>Bad: {bad}</p>
      <p className={css.result}>Total: {total}</p>
      <p className={css.result}>Positive : {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
