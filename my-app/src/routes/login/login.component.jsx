import React from 'react'
import {
    Button,
    Typography,
    Grid
} from '@mui/material';
import {makeStyles} from '@mui/styles'
import FormInput from '../../components/form-input/form-input.component'

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


const Login = () => {

    const {title, subTitle, loginBtn, LoginTxt} = useStyles()

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <Typography variant="h3" gutterBottom component="div" className={title}>
                    Sign In
                </Typography>
                <Typography variant="body1" gutterBottom component="div" className={subTitle}>
                    Sign in and start your MCQ exam.
                </Typography>
                <Typography textAlign="center" component="div">
                    <FormInput label="User Name" />
                </Typography>

                <Typography textAlign="center" component="div">
                    <FormInput type="email" label="Email" />
                </Typography>

                <Typography textAlign="center" component="div">
                    <FormInput type="password" label="Password" />
                </Typography>
                
                <Typography component="div" textAlign="center">
                    <Button className={loginBtn} >
                        <Typography variant="body1" component="div" className={LoginTxt}>Login</Typography>
                    </Button>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Login
