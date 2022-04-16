import React, {useContext, useEffect, useState} from 'react'
import {Grid,Box} from '@mui/material'
import {QuestionContext} from '../../context/questions.context'
import QuestionForm from '../../components/question-form/question-form.component'
import SimpleStepper from '../../components/stepper/stepper.component'
import {useNavigate} from 'react-router-dom'
import QuestionButtons from '../../components/question-button/question-buttons.component'
import Loading from '../../components/loading/loading.component'

export const Questions = () => {

    const navigate = useNavigate()

    const {dataArr, handleSumTotal} = useContext(QuestionContext)
    const [QuestionArray, setQuestionArray] = useState([])
    const [QuestionCount, setQuestionCount] = useState(0);
    const [QuestState, setQuestState] = useState([])


    const handleQuestionAnsw = (event) =>{
        const {value, name} = event.target

        handleSumTotal(name,value)
        
        let newArr = [...QuestState]
        newArr[QuestionCount] = true;

        setQuestState(newArr)
    }

    const handleQuestionIncr = () =>{
        if(QuestionArray.length - 1 > QuestionCount){
            setQuestionCount(QuestionCount + 1)
        }
        else{
            navigate("/total")
        }
    }

    const handleQuestionDecr = () =>{
        if(QuestionCount > 0)
        setQuestionCount(QuestionCount - 1)
    }

    useEffect(()=>{
        setQuestionArray(dataArr)
    },[dataArr])

    useEffect(()=>{

        const CreatingBoolState = () =>{
            let newArr = []
            for (let index = 0; index < QuestionArray.length; index++) {
                newArr.push(false)
            }
            setQuestState(newArr)
        }
        CreatingBoolState()
        
    },[QuestionArray])

    return (
        <Box>
            {
                QuestionArray.length > 0?
                <SimpleStepper 
                    array={Array(QuestionArray.length).fill().map((v,i)=>i)} 
                    countStep={QuestionCount} 
                />
                :
                <Loading openLoading={true} />
            }
            
            
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh',width:'100%'}}
            >
                <Grid item xs={3} sx={{p:2}}>
                    <QuestionForm 
                        onChange={handleQuestionAnsw} 
                        QuestionArray={QuestionArray} 
                        QuestionCount={QuestionCount} 
                    />
                </Grid>

                       
                <QuestionButtons 
                    array={QuestState} 
                    QuestionCount={QuestionCount} 
                    NextQuestion={handleQuestionIncr} 
                    PreviousQuestion={handleQuestionDecr} 
                />
                
        
                    
            </Grid>
            
        </Box>
               
    )
}

export default Questions
