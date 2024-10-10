import { useState } from "react";

function Exploler({ data }: any) {
    const [expand, setExpand] = useState(false);
    console.log(data);
    if (data.isFolder) {
        return (
            <>
                <div
                    onClick={() => setExpand(!expand)}
                >
                    {data.name}
                </div>
                <div style={{ display: expand ? "block" : "none" }}>
                    {expand && data.data.map((x: any, index: any) => <Exploler data={x} key={index}></Exploler>)}
                </div>
            </>
        );
    }
    return <div>{data.name}</div>;
}

export default function ExamTest() {
    const total = {
        id: "1",
        name: "first",
        isFolder: true,
        data: [
            {
                id: "2",
                name: "second",
                isFolder: true,
                data: [
                    {
                        id: "3",
                        name: "third",
                        isFolder: false,
                    },
                    {
                        id: "4",
                        name: "fourth",
                        isFolder: false,
                    },
                ],
            },
            {
                id: "5",
                name: "five",
                isFolder: false,
            },
        ],
    };
    return <Exploler data={total}></Exploler>;
}
