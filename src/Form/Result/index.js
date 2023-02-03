import "./style.css";

export const Result  = ({ result }) => (
    <p className="fieldset__result">
    {result !== undefined && (
        <>
        Kwota po przeliczeniu&nbsp;={" "}

        <strong>
        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
        </>
    )}
    </p>
);