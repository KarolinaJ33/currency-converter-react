import "./style.css";

export const Result = ({ result }) => (
  <p className="form__result">
    {!!result && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
        {" "}
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);
