import useClock from "../hooks/MyClock";

export default function ClockDemo(){
    const [time] = useClock();
    return (
        <div className="container pt-3" >
            <span class="badge bg-success">{time}</span>
        </div>
    )
}