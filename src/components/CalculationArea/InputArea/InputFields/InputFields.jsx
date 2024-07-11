import InputField from "./InputField/InputField"

export default function InputFields({ onInputChangeHandler, currentValues }) {

    return (
        <div className="input-fields">
            <ul >
                <li>
                    <ul className="input-group">
                        <InputField label="Utgångssumma (kr)"
                            onInputChangeHandler={onInputChangeHandler}
                            propertyName="initialInvestment"
                            currentValue={currentValues.initialInvestment}
                            max="100000000" />

                        <InputField label="Årlig insättning (kr)"
                            onInputChangeHandler={onInputChangeHandler}
                            propertyName="yearlyInvestment"
                            currentValue={currentValues.yearlyInvestment} 
                            max="100000" />

                    </ul>
                </li>
                <li>
                    <ul className="input-group">
                        <InputField label="Förväntad årsränta (%)"
                            onInputChangeHandler={onInputChangeHandler}
                            propertyName="expectedReturnRate"
                            currentValue={currentValues.expectedReturnRate} 
                            max="100" />

                        <InputField label="Investeringslängd (år)"
                            onInputChangeHandler={onInputChangeHandler}
                            propertyName="numberOfYears"
                            currentValue={currentValues.numberOfYears} 
                            max="20" />

                    </ul>
                </li>
            </ul>
        </div>
    )
}
;