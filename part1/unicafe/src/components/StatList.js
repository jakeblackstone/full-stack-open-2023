import React from "react";
import Stat from "./Stat";

const StatList = (props) =>  {
    const {good, neutral, bad} = props.values
    const sum = good + neutral + bad;
    const average = () => (good-bad) / sum;
    const positive = () => (good/sum) * 100 + "%";

    return(
        <table>
            <tbody>
            <tr>
                <td>good</td>
                <td><Stat value={good}/></td>
            </tr>
            <tr>
                <td>neutral</td>
                <td><Stat value={neutral}/></td>
            </tr>
            <tr>
                <td>bad</td>
                <td><Stat value={bad}/></td>
            </tr>
            <tr>
                <td>total</td>
                <td><Stat value={sum}/></td>
            </tr>
            <tr>
                <td>average</td>
                <td><Stat value={average()}/></td>
            </tr>
            <tr>
                <td>positive</td>
                <td><Stat value={positive()}/></td>
            </tr>
            </tbody>
        </table>
    )
    
}

export default StatList;