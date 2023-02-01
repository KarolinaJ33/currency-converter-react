import "./style.css";

const Form = () => (
<p>
  <label>
    Kwota: <input className="form__field" required type="number" min="0.01" step="any" /> PLN
  </label>
</p>
);

export default Form;