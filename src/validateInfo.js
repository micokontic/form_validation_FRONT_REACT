export default function validateInfo(values){
    let errors={

    }
    if(!values.username.trim()){
        errors.username='Username required'
    }

    if(!values.email){
        errors.email="Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
     errors.email = 'Email address is invalid';
    }
    
    if(!values.password){
        errors.password="Please enter password"
    }else if(values.password.length<8){
        errors.password="Password must be longer then 8 charachter"

    }
    if(!values.password2){
        errors.password2="Please enter password confirmation"
    }
    else if(values.password!==values.password2){
        errors.password2="Passwords do not match"
    }
    return errors
}