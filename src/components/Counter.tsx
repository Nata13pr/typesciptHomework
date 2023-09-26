import React from "react"
// import Controls from "./Controls"

interface Props {
    initialValue:number;
    step:number;
}

interface State{
    value:number;
}

class Counter extends React.Component<
//{} якщо немає props,а є  лише стате
Props,State>{
    static defaultProps={
        initialValue:0,
        step:1,
    }
   
    state={
        value:this.props.initialValue,
    }

    handleIncrement=()=>{
        this.setState(prevState=>({
            value:prevState.value+1,
        }))
    }
    handledecrement=()=>{
        this.setState(prevState=>({
            value:prevState.value-1,
        }))
    }
    render (){
        
        return(
            <div>
                <button onClick={this.handleIncrement}>+</button>
                <span>{this.state.value}</span>
                <button onClick={this.handledecrement}>-</button>

               {/* <Controls onDecrement={this.handledecrement} onIncrement={this.handleIncrement}/> */}
            </div>
        )
    }
}
export default Counter;