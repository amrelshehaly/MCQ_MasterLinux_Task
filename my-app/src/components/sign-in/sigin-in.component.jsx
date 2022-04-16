import React, {useState, useEffect} from 'react'
import {
    Button,
    Typography,
} from '@mui/material'
import FormInput from '../form-input/form-input.component'
import Loading from '../loading/loading.component'
import {useNavigate} from 'react-router-dom'
import SignInStyle from './sign-in.styles'

const formFields = {
    UserName: '',
    Email:'',
    Password: '',
}


const Errors = {
    UserName:{
        txt:"Must have more than 5 characters",
        state:false
    },
    Email:{
        txt:"Email not valid",
        state:false
    }
    ,
    Password:{
        txt:"Password must be at least 8 characters long!",
        state:false
    }
}


const SignIn = () => {
    const {title, subTitle, loginBtn, LoginTxt} = SignInStyle
    const [userForm, setuserForm] = useState(formFields)
    const [validateUser , setUserValidation] = useState(Errors)
    const [objectKey, setObjectKey] = useState('');
    const [loginBtnDisable, setloginBtnDisable] = useState(true)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const {
        UserName,
        Email,
        Password
    }= userForm

    const handleUserForm = (event) =>{
        const {name, value} = event.target
        setuserForm({
            ...userForm,
            [name]: value
        })

        setObjectKey(name)
        // handleErrorValidation(name)

    }

    const validEmailRegex = RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    );

    const validateForm = errors => {
    let valid = true;
        Object.values(errors).forEach(val => {
            if(val.state === true){
                return false
            }
        });
    return valid
    };

    const handleErrorValidation = (str) =>{
        var bool ;
        var txt ={
            txt: validateUser[str].txt
        }

        switch (str) {
            case "UserName":
                bool =  userForm.UserName.length < 5? true: false
                break;  
            case "Email":
                bool =  !validEmailRegex.test(userForm.Email)? true: false
                break;
            case "Password":
                bool =  userForm.Password.length < 8? true: false
                break;
            default:
                break;
        }

        setUserValidation({
            ...validateUser,
            [str]:{
                ...txt,
                "state":bool
            }
        })
        
    }

    useEffect(()=>{
        if(objectKey.length > 0)
            handleErrorValidation(objectKey)
        if(validateForm(validateUser) && UserName.length >= 5 && validEmailRegex.test(userForm.Email) && Password.length >= 8){
            setloginBtnDisable(false)
        }else{
            setloginBtnDisable(true)
        }
        
    },[userForm])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        setTimeout(async ()=>{
            await setLoading(false)
            await navigate("/home")
        },3000)
    }


    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h3" gutterBottom component="div" sx={title}>
                    Sign In
                </Typography>
                <Typography variant="body1" gutterBottom component="div" sx={subTitle}>
                    Sign in and start your MCQ exam.
                </Typography>
                <Typography textAlign="center" component="div">
                    <FormInput fullWidth helperText={validateUser.UserName.state? validateUser.UserName.txt :''}  onChange={handleUserForm} label="User Name" name="UserName" value={UserName} />
                </Typography>

                <Typography textAlign="center" component="div">
                    <FormInput fullWidth helperText={validateUser.Email.state? validateUser.Email.txt :''} onChange={handleUserForm} type="email" label="Email" name="Email" value={Email} />
                </Typography>

                <Typography textAlign="center" component="div">
                    <FormInput fullWidth helperText={validateUser.Password.state? validateUser.Password.txt :''} onChange={handleUserForm} type="password" label="Password"  name="Password" value={Password}/>
                </Typography>
                
                <Typography component="div" textAlign="center" sx={{marginY:5}}>
                    <Button type="submit" sx={loginBtn} disabled={loginBtnDisable} variant="contained" fullWidth>
                        <Typography sx={{fontWeight:700}} variant="body1" component="div" sx={LoginTxt}>Login</Typography>
                    </Button>
                </Typography>
                <Loading openLoading={loading} />
        </form>
    )
}


export default SignIn