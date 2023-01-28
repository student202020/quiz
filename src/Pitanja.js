import React from "react"
import { useGlobalContext } from "./context"

export default function Pitanja(){
    const {pitanja, quiz, table, index, check, rezultat} = useGlobalContext()
    const{question, correct_answer, incorrect_answers} = pitanja[index]

    const odgovori =[...incorrect_answers]
    let i = Math.floor(Math.random() * 4)
    if(i === 3){odgovori.push(correct_answer)}
    else{
    odgovori.push(odgovori[i])
    odgovori[i] = correct_answer}
    return(
        <div>
 <h1>{question}</h1>


 {odgovori.map(item => {
    return(  <div  className="kiki1" onClick={() => check(item === correct_answer)}>{item}</div>  )})
   
}

     <p>Ukupno tačnih odgovora: {rezultat}</p>      
        </div>
    )
}