import { useCurrentDate } from "./useCurrentDate";
import { Time } from "./styled";

export const Clock = () => {
    const{date, formattedDate} = useCurrentDate();
    
    return (
        <Time>
            Dzisiaj jest
            {" "}
            {formattedDate(date)}
        </Time>
    )
};  

export default Clock;