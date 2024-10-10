import React, { useState } from 'react'

const Sockets = () => {
    const [bids, stbids] = useState([]);
    const ws = new WebSocket('wss://ws.bitstamp.net');
    const apicall = {
        event: "bts:subscribe",
        data: {
            "channel": "order_book_btcusd"
        }
    }

    ws.onopen = () => {
        ws.send(JSON.stringify(apicall));
    }

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(data.data.bids.slice(0, 20));
        stbids(data.data.bids.slice(0, 20));
    }

    return (
        <div>
            {bids.map((x, index) => {
                return <div key={index}>{x}</div>
            })}
        </div>
    )
}

export default Sockets
