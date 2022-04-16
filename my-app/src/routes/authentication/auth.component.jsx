import React from 'react'
import {Grid} from '@mui/material';
import SignIn from '../../components/sign-in/sigin-in.component'

const Auth = () => {


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
               <SignIn />
            </Grid>
        </Grid>
    )
}

export default Auth
