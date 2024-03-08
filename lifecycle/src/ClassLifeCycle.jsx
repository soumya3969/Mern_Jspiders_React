import React, { Component } from 'react'


export class ClassLifeCycle extends Component {
    constructor(){ //?this 
        super()
        this.state={
            count:0,
            color:'#252424',
        }
    }
    static getDerivedStateFromProps(props,state){ //? this method id used to assign props data as a state 
        // console.log(props,state);
        console.log('this is getDerivedStateFromProps()')
        return state.color=props.color;
    }
    componentDidMount(){ //? this is the last method mounting ,it only execute after initial render 
        console.log('this is componentDidMount()')
    }
  render() { //?this is the third method of mounting it render the element in dom
    return (
      <>
        <div>ClassLifeCycle</div>
        {console.log('this is render ()')}
        <h1 style={{color:'#252525'}}>{this.state.count}</h1>
        <h1 style={{background:this.state.color,color:'#FFFFFF'}}>This is Bg Text</h1>
      </>
    )
  }
}
export default ClassLifeCycle;

