import React from 'react';
import loginImg from "../../useravatar_default.png";


export class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password: '',
            confirmPassword: ''
        }
        
        
    }
    handleSubmit = () => {
        const { password, confirmPassword } = this.state;
        // perform all neccassary validations
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else {
            console.log("good job")
            // make API call
        }
    }
    render(){
        return <div className="base-container reg-base-container" ref={this.props.containerRef}>
            <div className="header reg-header">Register</div>
            <div className="content reg-content">
                <div className="image reg-image">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="form reg-form">
                <div class="form-group reg-form-group">
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
                    <div className="form-group reg-form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group reg-form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group reg-form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" name="phone" placeholder="Phone" pattern="[0-9]*" inputMode="" />
                    </div>
                    <div className="form-group reg-form-group">
                        <label htmlFor="department">Department</label>
                        <input type="text" name="department" placeholder="Department" />
                    </div>
                    <div className="form-group reg-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-group reg-form-group">
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input type="password" name="confirmpassword" placeholder="Confirm Password" />
                    </div>
                </div>
            </div>
            <div className="footer reg-footer">
              <button className="btn" type="button">Register</button>   
            </div>
        </div>
    }
}