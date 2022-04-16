import {useState,createContext, useEffect} from "react"
import DATA_STORE from '../DATA_STORE.json'


export const QuestionContext = createContext({
    dataArr:[]
})

export const QuestionProvider = ({children}) =>{
    const [dataArr, setdataArr] = useState(DATA_STORE)
    const [CheckAnswers , setCheckAnswers] = useState([false,false,false,false,false,false,false])

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
                for (let x = array[i].choices.length - 1; x > 0; x--) {
                    var z = Math.floor(Math.random() * (x + 1));
                    var temp2 = array[i].choices[x]
                    array[i].choices[x] = array[i].choices[z]
                    array[i].choices[z] = temp2
                }
        }
        return array
    }  

    const handleSumTotal = (name, value) =>{
        const idx = parseInt(name)
        const CheckAnw = dataArr.find((val)=> idx+"" === val.id)
        let newArr = [...CheckAnswers]
        if(CheckAnw.answer == value){
            newArr[idx-1] = true
        }else{
            newArr[idx-1] = false
        }
        setCheckAnswers(newArr)

        console.log(CheckAnswers)
    }

    useEffect(()=>{
        setdataArr(shuffleArray(dataArr))
    },[dataArr])

    const value = {dataArr, handleSumTotal}
    return(
        <QuestionContext.Provider value={value}>
            {children}
        </QuestionContext.Provider>
    )
}