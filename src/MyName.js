import React, { Component } from 'react';
import './App.css';

/*
함수형 컴퍼넌트
: 단순히 props만 받아와서 별 기능없이 보여주기만 하는 것
{Conponent}를 extend하지 않아도 됨

const MyName = ({name}) => {
    return (
        <div>
          안녕하세요! 제 이름은 <b>{name}</b>입니다.
        </div>
      );  
}
*/

//class형 컴퍼넌트
class MyName extends Component {
    //이게 더 최신 문법
    static defaultProps = {
        name:'기본이름'
    }
  
    render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
      </div>
    );
  }
}

/*
MyName.defaultProps = {
    name:'기본이름'
}
*/

export default MyName;
