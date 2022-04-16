import React from 'react'
import {Button, Box, Stack} from '@mui/material'


const QuestionButtons = ({array, QuestionCount, NextQuestion, PreviousQuestion}) => {
    return (
        <Box>
            {
                array.map((val, idx)=>{
                    return(
                        <Stack key={idx} style={QuestionCount === idx? {display:"block"}:{display:"none"}} sx={{marginY:5}} direction="row" justifyContent="center" spacing={12}>
                            <Button  
                                sx={{width:'100px', background:"#c98700"}} 
                                onClick={PreviousQuestion} 
                                style={idx === 0? {display:"none"}: {display:"inline-flex"}}
                                variant="contained">
                                    Back
                            </Button>
                            <Button 
                                sx={{width:'100px', background:"#00b54fcf"}} 
                                onClick={NextQuestion} 
                                disabled={QuestionCount === idx && val? false : true}
                                variant="contained">
                                    {array.length - 1 > idx? 'Next':'Submit'}
                            </Button>
                        </Stack>
                    )
                })
            }     
        </Box>
    )
}

export default QuestionButtons