import { useState } from "react"

import InputArea from "./InputArea/InputArea"
import ResultArea from "./ResultArea/ResultArea"

export default function CalculationArea() {

    const [inputValues, setInputValues] = useState()

    function saveInputValues(inputObject)
    {
        setInputValues({
            initialInvestment: inputObject.initialInvestment,
            yearlyInvestment: inputObject.yearlyInvestment,
            expectedReturnRate: inputObject.expectedReturnRate,
            numberOfYears: inputObject.numberOfYears
        })
    }

    return (
        <div>
            <InputArea saveInputValuesHandler={saveInputValues} />
            <ResultArea inputValues={inputValues}  /> 
        </div>
    )
};