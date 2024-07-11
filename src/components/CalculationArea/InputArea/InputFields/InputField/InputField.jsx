export default function InputField({ label, onInputChangeHandler, propertyName, currentValue, max }) {
    return (
        <li className="user-input-field">
            <label >{label}</label>
            <input type="number" onChange={(event) => onInputChangeHandler(propertyName, event.target.value, max)}  value={currentValue} max={max} />
        </li>
    )
}
;