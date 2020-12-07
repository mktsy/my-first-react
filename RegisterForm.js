import React, {Component} from 'react';
class RegisterForm extends Component{
    state = {
        formElements: {
            username: { //กำหนดชื่อ input element 
                type: 'text', //เก็บประเภทของ input
                value: '',  //เก็บค่าที่ user กรอกใน form
                validator: {    //เก็บ object ที่ใช้กำหนดเงื่อนไขในการกรอก input
                    required: true, //กำหนดว่า input นี้จำเป็นต้องกรอกหรือไม่
                    minLength: 5,
                    maxLength: 20
                },
                touched: false, //ใช้เก็บสถานะ หากผู้ใช้ยังไม่เข้ามากรอกข้อมูลลง <input> ไม่ต้องแสดงข้อผิดพลาด ถ้าเข้ามากรอกแล้วค่อยแสดง 
                error: {status: true, message: ''} //เก็บข้อผิดพลาดของ input และข้อความที่ใช้แสดงเมื่อ user กรอกข้อมูลไม่ถูก
            },
            email: {
                type: 'email',
                value: '',
                validator: {
                    required: true,
                    pattern: 'email'
                },
                touched: false,
                error: {status: true, message: ''}
            },
            password: {
                type: 'password',
                value: '',
                validator: {
                    required: true,
                    minLength: 8,
                    maxLength: 30
                },
                touched: false,
                error: {status: true, message: ''}
            }
        },
        formValid: false //เก็บสถานะของ form หาก user กรอกข้อมูลใน formElement ถูกทั้งหมด formValid จะมีค่าเป็น true
    }
    onFormChange = (event) =>{ //ประกาศเมธอด
        const name = event.target.name; //เก็บชื่อ input ไว้ในตัวแปร name
        const value = event.target.value; //เก็บค่าที่ผู้ใช้กรอกไว้ในตัวแปร value
        let updatedForm = {...this.state.formElements}; //copy ค่าใน this.state.formElement ไปเก็บในตัวแปร updatedForm 
        updatedForm[name].value = value; //update ค่าให้กับ input
        updatedForm[name].touched = true; //เมื่อผู้ใช้เข้ามาแก้ไขข้อมูลให้ touched เป็น true
        const validatorObject = this.checkValidator(value, updatedForm[name].validator); //ตรวจสอบ error ในขณะที่ผู้ใช้กรอกข้อมูล โดยเรียก method validatorObject
        updatedForm[name].error = { //update ค่า error ของแท็กปัจจุบันไปยัง state
            status: validatorObject.status,
            message: validatorObject.message
        }
        let formStatus = true; //ประกาศตัวแปร formStatus ใช้เก็บสถานะของ form ว่าผู้ใช้กรอกข้อมูลถูกต้องในทุกๆ input หรือไม่
        for(let name in updatedForm){ //วนลูปเข้าไปในทุกๆ แท็กของ input เพื่อดูค่า error ว่าผู้ใช้กรอกถูกหรือไม่
            if(updatedForm[name].validator.required === true){ //ตรวจสอบว่า input ปัจจุบันถูกกำหนดว่าต้องกรอกข้อมูลหรือไม่ (required)
                formStatus = !updatedForm[name].error.status && formStatus; //เก็บสถานะของ input ไปที่ formStatus ถ้ากรอกข้อมูลไม่ถูกต้องจะส่ง form ไม่ได้
            }
        }
        this.setState({ //update ค่าใน state ด้วย method setState
            ...this.state,
            formElements: updatedForm,
            formValid: formStatus
        });
    }
    checkValidator = (value, rule) => { //ประกาศ method โดยมี parameter 2 ตัว value คือค่าของ input ส่วน rule คือกฎที่ใช้ตรวจสอบค่าของ input
        let valid = true; //ประกาศ valid เพื่อใช้บอกผู้ใช้ว่ากรอกข้อมูลถูกหรือไม่
        let message = ''; //เพื่อใช้อธิบายข้อผิดพลาดต่างๆ เป็นข้อความบอก
        if(value.trim().length === 0 && rule.required){ //ตรวจสอบค่าว่างกรณีที่ผู้ใช้ไม่กรอกอะไรเลย และเป็น input ที่จำเป็นต้องกรอก
            valid = false; //หากผู้ใช้ไม่กรอกข้อมูลลงไป
            message = 'Please fill up.'
        }
        if(value.length < rule.minLength && valid){ //ตรวจสอบจำนวนอักษรที่ผู้ใช้กรอกว่าน้อยกว่า minLength 
            valid = false;
            message = `at least ${rule.minLength} character`;
        }
        if(value.length > rule.maxLength && valid){
            valid = false;
            message = `more than ${rule.minLength} character`;
        }
        if(rule.pattern === 'email' && valid){
            if(/^[^\s@]+@[^\s@]+\.[^s@]+$/.test(value) === false){ //ใช้ regular express ตรวจสอบ email
                valid = false;
                message = 'Wrong email';
            }
        }
        return {status: !valid, message:message}; //return ผลลัพธ์ในรูปแบบ object status เก็บค่า true หรือ false, message เก็บข้อความที่แสดงเมื่อเกิด error
    }
    getErrorMessage = (name) => { //ประกาศ method ซึ่ง parameter name คือชื่อแท็ก input
        return this.state.formElements[name].error.message; //return ข้อความอธิบายข้อผิดพลาดต่างๆ
    }
    getInputClass = (name) => { //ประกาศ method โดยผ่านชื่อ element ที่ต้องการเข้าไป
        const elementErrorStatus = this.state.formElements[name].error.status; //ตรวจสอบสถานะการกรอกข้อมูลแล้วเก็บไปในตัวแปร
        return elementErrorStatus && this.state.formElements[name].touched? 'form-control is-invalid': 'form-control is-valid'; //ถ้า error จะ return invalid
    }                                                                                                                           //ถ้าไม่ error จะ return valid
    onFormSubmit = (event) => { //ประกาศ method ใช้สำหรับส่ง form
        event.preventDefault(); //ยกเลิกคุณสมบัติการส่ง form ผ่านทาง http request
        const formData = {}; //ประกาศตัวแปรแบบ object สำหรับเก็บ input ที่ได้จาก form
        for(let name in this.state.formElements){ //วนลูปเข้าไปทุกค่าใน formElement แล้วเอาค่า input ไปเก็บใน object formData
            formData[name] = this.state.formElements[name].value;
        }
        console.log(formData);
    }
    render(){
        return(
            <div className = "row">
                <div className = "col-sm-3 mt-5">
                </div>
                <div className = "col-sm-6 mt-5 card">
                    <div className = "card-body ml-3 mr-3 mt-5 mb-1">
                        <form onSubmit={this.onFormSubmit}> {/*เมื่อเกิด event onSubmit จะเรียกใช้เมธอด onFormSubmit (เมื่อผู้ใช้ส่ง form) */}
                            <div className = "form-group">
                                <label htmlFor = "username">User Name</label>
                                <input 
                                    type = "text"
                                    className = {this.getInputClass('username')} //กำหนดคลาสให้กับ input (form-control is-valid หรือ form-control is-invalid)
                                    id = "username"
                                    name = "username"
                                    onChange = {this.onFormChange} //เมื่อเกิด event onChange จะเรียกใช้เมธอด onFormChange (เมื่อผู้ใช้แก้ไขค่าใน input) 
                                />
                                <div className = "invalid-feedback">
                                    {this.getErrorMessage('username')}
                                </div>
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "email">Email</label>
                                <input 
                                    type = "email"
                                    className = {this.getInputClass('email')}
                                    id = "email"
                                    name = "email"
                                    onChange = {this.onFormChange}
                                />
                                <div className = "invalid-feedback">
                                    {this.getErrorMessage('email')} 
                                </div>
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "password">Password</label>
                                <input 
                                    type = "password"
                                    className = {this.getInputClass('password')}
                                    id = "password"
                                    name = "password"
                                    onChange = {this.onFormChange}
                                />
                                <div className = "invalid-feedback">
                                    {this.getErrorMessage('password')}
                                </div>
                            </div>
                            <div className = "text-center">
                                <button 
                                    type = "submit" 
                                    className = "btn btn-primary my-1" 
                                    disabled = {!this.state.formValid} //กำหนดค่า true หรือ false ไปยัง disabled โดยดูค่าจาก formValid ถ้าเป็น false ยกเลิกปุ่ม register
                                >                                      
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className = "col-sm-3 mt-5">
                </div>
            </div>
        )
    }
}
export default RegisterForm;