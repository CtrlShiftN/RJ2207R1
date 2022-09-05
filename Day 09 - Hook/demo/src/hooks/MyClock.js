import { useState } from "react";

export default function useClock() {
    const [time, setTime] = useState('');

    const updateTime = () => {
        let dateInfo = new Date();
        let hour = dateInfo.getHours();
        let minute = dateInfo.getMinutes();
        let second = dateInfo.getSeconds();
        setTime(`${hour}:${minute}:${second}`);
        // let str = hour + ':' + minute + ':' + second;
        // setTime(str);
    }
    setInterval(function () {
        updateTime();
    }, 1000);

    return [time];
}