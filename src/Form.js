import React,{useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'
import './App.css'
function Form() {
    const [isSubmitted,setIsSubimitted]=useState(false)

    function submitForm(){
        setIsSubimitted(true)
    }
    return ( <>

        <div className="form-container">
            <span className="close-btn"></span>
<div className="form-content-left">
    <img src="img/img-2.svg" alt="spaceship" className="form-img"></img>
</div>
            
            {(!isSubmitted ? (<FormSignup submitForm={submitForm}/>):(<FormSuccess/>))}
        </div>
        
           
           
        
        </>
    )
}

export default Form
