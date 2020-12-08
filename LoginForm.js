import React, {Component} from 'react';
class LoginForm extends Component{ //172
    state = { //กำหนด state สำหรับเก็บค่า username และ password
        username: '', //กำหนดชื่อ input element
        password: ''
    }
    onInputChange = (event) => { //สร้าง method ซึ่งเมธอดนี้จะถูกเรียกทุกๆ ครั้งเมื่อผู้ใช้เปลี่ยนแปลงค่า input โดยผ่าน parameter event เมื่อผู้ใช้แก้ไขค่าใน element จะส่ง event ซึ่งเป็นข้อมูลปัจจุบันของ element มาด้วย
        this.setState({ //update ค่าของ state
            [event.target.name]: event.target.value //update ค่าให้ state โดย name คือชื่อของ input, value คือค่าที่อยู่ใน input
        })
        console.log(this.state);
    }
    onLoginSubmit = (event) => { //สร้าง method โดยจะถูกเรียกใช้เมื่อผู้ใช้ส่ง form
        event.preventDefault(); //ใช้คำสั่ง event.preventDefault() เพื่อยกเลิกการส่ง form ไปยัง http request (ไม่โหลดหน้าเพจใหม่ เมื่อผู้ใช้ส่งคลิ้ก form)
        console.log(this.state); //แสดงค่า state ในหน้าต่าง console
    }
    render(){
        return(
            <div className = "col-6 mt-5 mx-auto card">
                <div className = "card-body">
                    <form onSubmit = {this.onLoginSubmit}> {/*เมื่อผู้ใช้ส่ง form จะกำหนดค่า event ให้กับ method onLoginSubmit */}
                        <div className = "form-group">
                            <label htmlFor = "username">User Name</label>
                            <input 
                                type = "text"
                                className = "form-control"
                                id = "username"
                                name = "username"
                                onChange = {this.onInputChange} //เมื่อผู้ใช้เปลี่ยนแปลงข้อมูล input - username จะเรียกใช้ method onInputChange
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
                                onChange = {this.onInputChange} //เมื่อผู้ใช้เปลี่ยนแปลงข้อมูล input - password จะเรียกใช้ method onInputChange
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