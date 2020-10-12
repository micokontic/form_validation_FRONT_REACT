import React from 'react'
import useForm from './useForm'
import validateInfo from './validateInfo'
import './Form.css';
function FormSignup({submitForm}) {
    const {handleChange,handleSubmit,values, errors}=useForm(validateInfo,submitForm);
    
    return (
        <div className="form-content-right">
            <form className="form" method="get" action="validation.php">
                <h1>Get started with us today! Create your account
                    by filling out the information below.
                </h1>
                <div className="form-inputs">
                    <label 
                    htmlFor="username" 
                    className="form-label">Username</label>
                    <input 
                     type="text" 
                     className="form-input"
                     id="username" 
                     name="username" 
                     placeholder="Enter your username"
                     value={values.username}
                     onChange={
                        handleChange}
                     required ></input>
                     {errors.username && <p>{errors.username}</p>}
                     
                </div>
                <div className="form-inputs">
                    <label 
                    htmlFor="email" 
                    className="form-label">Email</label>
                    <input 
                     type="email" 
                     className="form-input"
                     id="email" 
                     name="email" 
                     placeholder="Enter your email"
                     value={values.email}
                     onChange={
                        handleChange}
                     required ></input>
                     {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label 
                    htmlFor="password"password
                    className="form-label">Password</label>
                    <input 
                     type="password" 
                     className="form-input"
                     id="password" 
                     name="password" 
                     placeholder="Enter your password"
                     value={values.password}
                     onChange={
                        handleChange}
                     required ></input>
                     {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label 
                    htmlFor="password2" 
                    className="form-label">Confirm Password</label>
                    <input 
                     type="password" 
                     className="form-input"
                     id="password2" 
                     name="password2" 
                     placeholder="Confirm your password"
                     value={values.password2}
                     onChange={
                        handleChange}
                     required ></input>
                     {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit" onClick={handleSubmit}>
                    Sign up
                </button>
                <p className="form-input-login">Already have an account? Login <span><a href="#">here</a></span>!</p>
                

            </form>
        </div>
    )
}

export default FormSignup
