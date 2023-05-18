import { useCurrentDate } from "./useCurrentDate";
import { Time } from "./styled";

const Clock = () => {
    const date = useCurrentDate();

    const formattedDate = date.toLocaleString("pl", {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        month: "long",
    });

    return <Time>Dzisiaj jest {formattedDate}</Time>;
};

export default Clock;
