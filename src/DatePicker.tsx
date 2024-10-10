import React, { useState } from 'react'

const CURR_YEAR = new Date().getFullYear();
const CURR_MONTH = new Date().getMonth();

const years = Array(21).fill(0).map((x, index) => { return { label: CURR_YEAR - 21 + index, id: CURR_YEAR - 21 + index } });
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
const DAYS_OF_THE_WEEK = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

console.log(years);
const DatePicker = () => {
    const [year, setYear] = useState(CURR_YEAR);
    const [month, setMonth] = useState(CURR_MONTH);

    const createCalendar = (year, month) => {
        console.log();
        const days = new Date(2022, 3, 0).getDate();
        console.log(days);
        const dayType = 3;
        return <table style={{ borderCollapse: 'collapse' }}>
            <tr>
                {DAYS_OF_THE_WEEK.map((x, index) => <th>{x}</th>)}
            </tr>
            <tbody>
                {Array(Math.floor(days / 5)).fill(0).map((_, index) => {
                    return <tr>
                        {Array(7).fill(0).map((x, ind) => {
                            if ((index === 0 && ind >= 3) || index > 0) {
                                return days >= 7 * index + ind + 1 && <td style={{ border: '1px solid', height: '30px', width: '30px', textAlign: 'center' }}>
                                    {7 * index + ind + 1}
                                </td>
                            }
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    }

    return (
        <div>
            <label>Years</label>
            <select onChange={(e) => setYear(e.target.value)
            }>
                {years.map(({ label, id }) => <option key={id}>{label}</option>)}
            </select>
            <label>months</label>
            <select onChange={(e) => setMonth(e.target.value)}>
                {months.map((val, index) => <option key={index}>{val}</option>)}
            </select>

            {createCalendar(year, month)}
        </div>
    )
}

export default DatePicker
