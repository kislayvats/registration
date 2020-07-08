import React from 'react';
import loginImg from "../../useravatar_default.png";
import "./style.css"

export class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="form">
                <div class="form-group">
    <label for="exampleFormControlSelect1">College Name</label>
    <select class="form-control college" id="exampleFormControlSelect1">
      <option selected>College Name</option>
      <option>CUSAT</option>
      <option>ABC</option>
      <option>ABC</option>
      <option>ABC</option>
      <option>ABC</option>
    </select>
  </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                </div>
            </div>
            <div className="footer">
              <button className="btn" type="button">Login</button>   
        
            </div>
        </div>
    }
}