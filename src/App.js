import React from 'react';
import logo from './logo.svg';
import './App.css'
import {Login,Register} from "./component/login/index";




class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLogginActive:true
    }
  }
  componentDidMount() {
    //Add .right by default
    this.rightside.classList.add("right");
  }
changeState(){
  const {isLogginActive}=this.state;
  if(isLogginActive){
    this.rightside.classList.remove("right");
    this.rightside.classList.add("left");
  }else{
    this.rightside.classList.remove("left");
    this.rightside.classList.add("right");
  }
  this.setState(prevState=>({isLogginActive:!prevState.isLogginActive}));
}


render(){
  const {isLogginActive}=this.state;
  // current = if user has isLogginActive as true,then render Register on the right side else Login:
  //basically used during transition
  const current=isLogginActive?"Register":"Login";
    // currentActive = if user has isLogginActive as true,then render Login on the side else Register
    //basically it states the current position of the user
  const currentActive=isLogginActive?"login":"register"
  return(
    <div className="App">
      <div className="login">
        <div className="container">
{/* if user is on login slide,the current reference will be passed to Login */}
{isLogginActive &&(
 <Login containerRef={(ref)=>this.current=ref} />
 )}
 {/* if user is not on login slide,the current reference will be passed to Register */}
 {!isLogginActive && (
   <Register containerRef={(ref)=>this.current=ref} />
 )}
        </div>
<RightSide
current={current}
currentActive={currentActive}
containerRef={ref=>this.rightside=ref}
onClick={this.changeState.bind(this)}
/>
      </div>
    </div>
  )
}

}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};






export default App;
