import {useState,useEffect} from 'react'

const useForm =(validateInfo,submitForm)=>{
    const [values,setValues]=useState({
        username:"",
        email:"",
        password:"",
        password2:""
    })
    const [errors,setErrors]=useState({
        username:"",
        email:"",
        password:"",
        password2:""   
    })
    const [isSubmitting,setIsSubmitting]=useState(false)
    const handleChange = (e) =>{
        e.preventDefault();
       const {name,value}=e.target;
       console.log(name);
       console.log(value);
        setValues({
            ...values,
        
                [name]:value
            
        })
    }
    const handleSubmit=(e)=>{
        
        e.preventDefault();
        setErrors(validateInfo(values));
        setIsSubmitting(true);
    }
    useEffect(
        ()=>{
            if (Object.keys(errors).length === 0 && isSubmitting) {
                submitForm();
              }
        }
    )
    return(
        {handleChange,handleSubmit,values,errors}
    )
}

export default useForm