interface Props{
    value:string;
    onChange:(filter:string)=>void;
}

const Filter =({value,onChange}:Props)=>(
<div>
    <p>Filter</p>
    <input type='text'
    value={value}
    onChange={evt=>onChange(evt.target.value)}/>
</div>
)
export default Filter;