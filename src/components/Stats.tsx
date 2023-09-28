
interface Props {
    total:number;
    completed:number;
}

const Stats=({total,completed}:Props)=>(
    <div>
        <p>
        <span>{total}</span>
        <span>All</span>
        </p>
        <p>
        <span>{completed}</span>
        <span>Done</span>
        </p>
    </div>
)

export default Stats;