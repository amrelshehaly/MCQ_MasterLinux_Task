import React, {useContext, useEffect, useState, Fragment} from 'react'
import {
    Box,
    Stepper,
    Step,
    StepLabel
} from '@mui/material'
import {makeStyles} from '@mui/styles'

const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
  ];


  const useStyles = {
    root: {
        '& .MuiStepLabel-root .Mui-completed': {
            color: '#20df7f', // circle color (COMPLETED)
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'grey.500', // Just text label (COMPLETED)
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#00a8ff', // circle color (ACTIVE)
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'common.white', // Just text label (ACTIVE)
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'white', // circle's number (ACTIVE)
            fontWeight:900
          },
    },
  };

const SimpleStepper = ({array, countStep}) =>{

    const {root} = useStyles;

    return(
        <Box sx={{marginTop:5}}>
            <Stepper  activeStep={countStep} alternativeLabel>
                {array.map((label, idx) => {
                return (
                    <Step sx={root} key={idx} >
                        <StepLabel>{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
        </Box>
    )
}

export default SimpleStepper;

