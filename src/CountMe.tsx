import { memo, useState } from "react"

const Counter = memo(({ value }) => {
    console.log('rendered');
    return <div>{value}</div>
})

const CountMe = () => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    return (
        <div>
            <Counter value={first} />
            <Counter value={second} />
            <button onClick={() => setFirst(first + 1)}>ewds</button>
        </div>
    )
}

export default CountMe
