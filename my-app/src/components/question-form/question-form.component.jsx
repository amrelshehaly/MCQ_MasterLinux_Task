import React, {useState} from 'react'
import {
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Paper
} from '@mui/material'

const useStyles ={
    radioInput:{
        color:"white",
        '&.Mui-checked':{
            color:"yellow"
        }
    },
    label:{
        fontWeight:750,
        fontSize:{
            lg:20
        }
    },
    paper:{
        background:'#5353536e',
        width:'100%'
    }
}


const QuestionForm = ({QuestionArray, QuestionCount, onChange}) => {
    const {radioInput, label, paper}  = useStyles
    // const [value, setValue] = useState('');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    //     console.log(event.target.value)
    //   };

    return (
        <Paper sx={paper} elevation={24}>
        <FormControl sx={{p:5}}>
        {
            QuestionArray.map((val,idx)=>{
                return(
                    <div key={val.id}  style={QuestionCount === idx? {display:"block"}: {display:"none"}}>
                        <Typography textAlign="left" sx={label}>{val.question}</Typography>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            onChange={onChange}
                            name={val.id}
                            
                        >
                            {
                                val.choices.map((val,idx)=>{
                                    return(
                                    
                                        <FormControlLabel key={idx} value={val} control={<Radio sx={radioInput} />} label={val} />
                                        
                                    )
                                })
                            }   
                        </RadioGroup>
                    </div>
                )   
            })
        }
    </FormControl>
    </Paper>
    )
}

export default QuestionForm
