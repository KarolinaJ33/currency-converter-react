import React, { useState, useEffect } from "react";
import { Time } from "./styled";

const formatDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long"
});

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Time>
            Dzisiaj jest {" "}
            {formatDate(date)}
        </Time>
    )
};  