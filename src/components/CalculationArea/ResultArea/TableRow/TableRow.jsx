import { formatter } from "../../../../util/investment"

export default function TableRow({resultRow}) {

    return (
        <tr key={resultRow.year} >
            <td>{resultRow.year}</td>
            <td>{formatter.format(resultRow.totalInvestedSum)}</td>
            <td>{formatter.format(resultRow.interest)}</td>
            <td>{formatter.format(resultRow.totalInterestGained)}</td>
            <td>{formatter.format(resultRow.valueEndOfYear)}</td>
        </tr>
    )
};