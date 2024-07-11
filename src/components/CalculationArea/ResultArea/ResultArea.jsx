import TableHead from "./TableHead/TableHead"
import TableRow from "./TableRow/TableRow"


import { calculateInvestmentResults } from "../../../util/investment"

export default function ResultArea({ inputValues }) {

    let investmentResultsArray = []

    if (inputValues.initialInvestment) {
        investmentResultsArray = calculateInvestmentResults({
            "initialInvestment": inputValues.initialInvestment, 
            "annualInvestment": inputValues.yearlyInvestment, 
            "expectedReturn": inputValues.expectedReturnRate, 
            "duration": inputValues.numberOfYears });
    }

    return (
        <div id="result" >
            <table >
                <TableHead />
                <tbody>
                    {investmentResultsArray.map((value) => <TableRow resultRow={value} />)}
                </tbody>
            </table>
        </div>
    )
};