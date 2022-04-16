import React, {useContext} from 'react'
import {QuestionContext} from '../../context/questions.context'
import {Paper, Grid, Typography} from '@mui/material'

export const Total = () => {
    const {TotalScore} = useContext(QuestionContext)

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh',width:'100%'}}
        >
           <Grid item xs={3} textAlign="center">
                <Paper sx={{width:'330px', background:"#fad7d71a"}} elevation={10} square>
                    <Typography sx={{padding:"20%"}} variant="h3">Score</Typography>
                    <Typography sx={{padding:"42%", color:"#01e000"}} variant="h4">{TotalScore}%</Typography>
                </Paper>
           </Grid>
        </Grid>
    )
}

export default Total