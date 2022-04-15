import React, {useState} from 'react'
import {
    Button,
    Typography,
} from '@mui/material';
import {makeStyles} from '@mui/styles'
import FormInput from '../form-input/form-input.component'

const useStyles = makeStyles({
    title:{
        fontSize: 64,
        textAlign:"center",
        fontWeight: 400
    },
    subTitle: {
        fontSize:16,
        textAlign:"center",
        fontWeight:400
    },
    loginBtn :{
        background: 'linear-gradient(45deg, #20df7f 30%, #20df7fd4 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgb(0 0 0 / 21%)',
        height: 48,
        padding: '0 30px',
        marginBlockStart:'10px',
        width:'300px',
    },
    LoginTxt:{
        color:"white"
    }
})

const formFields = {
    UserName: '',
    Email:'',
    Password: '',
}

const ValidateError = [
   {
        id:"UserName",
        msg:"Must have more than 5 characters",
        error: false
        
    },
    {
        id:"Email",
        msg:"Email not valid",
        error: false
    }
    ,
    {
        id:"Password",
        msg:"Error hero",
        error:false
    },
]

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
    const {title, subTitle, loginBtn, LoginTxt} = useStyles()
    const [userForm, setuserForm] = useState(formFields)
    const [validateUser , setUserValidation] = useState(Errors)

    // console.log(validateUser)

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

        handleErrorValidation(name)

    }

    const validEmailRegex = RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
      );

    const handleErrorValidation = (str) =>{
        console.log(str)
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

    const handleSubmit = (e) =>{
        e.preventDefault()
    }


    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h3" gutterBottom component="div" className={title}>
                    Sign In
                </Typography>
                <Typography variant="body1" gutterBottom component="div" className={subTitle}>
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
                
                <Typography component="div" textAlign="center">
                    <Button className={loginBtn} >
                        <Typography variant="body1" component="div" className={LoginTxt}>Login</Typography>
                    </Button>
                </Typography>
        </form>
    )
}


export default SignIn