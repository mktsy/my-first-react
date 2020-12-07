import React, {Component} from 'react';
class LoginForm extends Component{
    state = {
        username: '', password: ''
    }
    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }
    onLoginSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div className = "col-6 mt-5 mx-auto card">
                <div className = "card-body">
                    <form onSubmit = {this.onLoginSubmit}>
                        <div className = "form-group">
                            <label htmlFor = "username">User Name</label>
                            <input 
                                type = "text"
                                className = "form-control"
                                id = "username"
                                name = "username"
                                onChange = {this.onInputChange}
                            />
                            <div className = "valid-feedback">
                                ใช้ได้นี่หว่า
                            </div>
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "password">Password</label>
                            <input
                                type = "password"
                                className = "form-control"
                                id = "password" name = "password"
                                onChange = {this.onInputChange}
                            />
                            <div className = "invalid-feedback">
                                รหัสผ่านสั้นเกินไปจ้า
                            </div>
                        </div>
                        <div className = "text-center">
                            <div>
                                <button type = "submit" className = "btn btn-primary my-1">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default LoginForm;