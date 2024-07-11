import { useState } from "react"

import InputFields from "./InputFields/InputFields"

export default function InputArea({ saveInputValuesHandler }) {

    const [inputValues, updateInputvalues] = useState({
        initialInvestment: 1000,
        yearlyInvestment: 100,
        expectedReturnRate: 4,
        numberOfYears: 3
    });

    function updateInputs(propertyName, propertyValue, maxAllowedValue) {
        const value = Math.min(Number(maxAllowedValue), Number(propertyValue))

        updateInputvalues((oldValues) => {
            return {
                ...oldValues, [propertyName]: parseInt(value)
            };
        })
    }


    return (
        <div id="user-input">
            <InputFields onInputChangeHandler={updateInputs} currentValues={inputValues} />
            <div className="center">
                <button onClick={() => saveInputValuesHandler(inputValues)} >Spara</button>
            </div>
        </div>
    )
}
;