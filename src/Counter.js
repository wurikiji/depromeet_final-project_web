import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number:0
  };
  
  /*
  //es5로 handle함수 구현햇을 시 생성자 만들어야함
  constructor(props){
    super(props); //extend한 Component의 생성자 호출
    //이 함수들에서 사용하는 this가 constructor에서 사용되는 this라고 명시
    this.hanldeIncrease = this.hanldeIncrease.bind(this);
    this.hanldeDecrease = this.hanldeDecrease.bind(this);
  }
  */
 
  hanldeIncrease = () => {
    this.setState({
      number:this.state.number+1
    });
  };

  hanldeDecrease = () => {
    this.setState({
      number:this.state.number-1
    });
  };

  render() {
    return (
        <div>
            <h1>카운터</h1>
            <div>값 : {this.state.number}</div>
            <button onclick={this.hanldeIncrease}>+</button>
            <button onclick={this.hanldeDecrease}>-</button>
        </div>
    )
  };
}

export default Counter;
