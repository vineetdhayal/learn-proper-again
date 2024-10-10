import React, { useMemo } from 'react';
import { Data } from './data';
import './calendar.css';

export default function Calendar() {
    const getHours = useMemo(() => {
        let arr = [];
        for (let i = 0; i < 24; i++) {
            let hour = i === 0 ? '' : (i <= 12 ? `${i}.00AM` : ((i - 12) !== 12 ? `${i - 12}.00PM` : ''));
            arr.push({ hour: hour, time: `${i}:00` });
        }
        return arr;
    }, []);

    return (
        <main>
            <section className="container">
                {getHours.map((ele, i) => (
                    <div className="hour" key={ele.time}>
                        <div style={{ marginTop: '-8px' }}>{ele.hour}</div>
                        <div className="hourborder"></div>
                    </div>
                ))}
                <Schedules />
            </section>
        </main>
    );
}

const getBlocks = () => {
    let blocked = [];
    const blockedCalendar = new Map();
    for (let i = 0; i < Data.length; i++) {
        const currentEvent = Data[i];
        const [sh, sm] = currentEvent.startTime.split(':').map(Number);
        const [eh, em] = currentEvent.endTime.split(':').map(Number);
        for (let y = sh; y <= eh; y++) {
            if (blockedCalendar.has(y)) {
                blockedCalendar.set(y, blockedCalendar.get(y) + 1);
            }
            else {
                blockedCalendar.set(y, 1);
            }
        }
        const max = Math.max(blockedCalendar.get(sh), blockedCalendar.get(eh));

        let start = sh * 60 + sm;
        let end = eh * 60 + em;
        const top = `${start}px`;
        const height = `${end - start}px`;
        const zIndex = i + 1;
        const width = `${100 - max * 10 - 10}%`;
        blocked.push({
            top: top,
            color: currentEvent.color,
            startTime: currentEvent.startTime,
            endTime: currentEvent.endTime,
            title: currentEvent.title,
            boxHeight: height,
            width: width,
            zIndex: zIndex
        });
    }
    return blocked
}

const Schedules = () => {
    const blocks = useMemo(() => getBlocks(), []);
    return (
        <div className="schedules">
            {blocks.map((ele, i) => (
                <Schedule details={ele} key={i} />
            ))}
        </div>
    );
}


const Schedule = ({ details }) => {
    return (
        <div
            className="schedule"
            style={{
                background: details.color,
                top: details.top,
                zIndex: details.zIndex,
                height: details.boxHeight,
                width: details.width,
                position: 'absolute'
            }}
        >
            <span>{details.title}: {details.startTime} - {details.endTime}</span>
        </div>
    );
}