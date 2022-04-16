import React, {useContext, useEffect, useState} from 'react'
import {
    Grid,
    Button,
    Box,
    Stack,
} from '@mui/material'
import {QuestionContext} from '../../context/questions.context'
import QuestionForm from '../../components/question-form/question-form.component'
import SimpleStepper from '../../components/stepper/stepper.component'

export const Questions = () => {

    const {dataArr, handleSumTotal} = useContext(QuestionContext)
    const [QuestionArray, setQuestionArray] = useState([])
    const [QuestionCount, setQuestionCount] = useState(0);
    // const [Question, setQuestion] = useState({})
    const [QuestState, setQuestState] = useState([false,false,false,false,false,false,false])

    console.log(QuestionArray)

    const handleQuestionAnsw = (event) =>{
        console.log(event.target.name)
        const {value, name} = event.target

        handleSumTotal(name,value)
        
        // setQuestion(event.target.value)
        let newArr = [...QuestState]
        newArr[QuestionCount] = true;

        setQuestState(newArr)
    }

    const handleQuestionIncr = () =>{
        if(QuestionArray.length > QuestionCount)
        setQuestionCount(QuestionCount + 1)
    }

    const handleQuestionDecr = () =>{
        if(QuestionCount > 0)
        setQuestionCount(QuestionCount - 1)
    }

    useEffect(()=>{
        setQuestionArray(dataArr)
    },[dataArr])

    return (
        <Box>

            <SimpleStepper array={QuestState} countStep={QuestionCount} />
            
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh',width:'100%'}}
            >
                <Grid item xs={3}>
                    <QuestionForm onChange={handleQuestionAnsw} QuestionArray={QuestionArray} QuestionCount={QuestionCount} />
                </Grid>

                    {
                        QuestState.map((val, idx)=>{
                            return(
                                <Stack key={idx} style={QuestionCount === idx? {display:"block"}:{display:"none"}} sx={{marginY:5}} direction="row" justifyContent="center" spacing={12}>
                                    <Button  
                                        sx={{width:'100px'}} 
                                        onClick={handleQuestionDecr} 
                                        style={idx === 0? {display:"none"}: {display:"inline-flex"}}
                                        variant="contained">
                                            Back
                                    </Button>
                                    <Button 
                                        sx={{width:'100px'}} 
                                        onClick={handleQuestionIncr} 
                                        disabled={QuestionCount === idx && val? false : true}
                                        variant="contained">
                                            Next
                                    </Button>
                                </Stack>
                            )
                        })
                    }     
                
        
                    
            </Grid>
            
        </Box>
               
    )
}

export default Questions
