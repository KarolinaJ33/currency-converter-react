import "./style.css";

export const Result  = ({ result }) => (
  <p className="fieldset__result">
    {result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)} PLN ={" "}

        <strong>
        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);