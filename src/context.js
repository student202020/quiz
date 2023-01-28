import React, {useState, useEffect, useContext, } from "react"



const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const table = {
        sports: 21,
        history: 23,
        politics: 24,               
      }
     
     const [index, setIndex] = React.useState(0)
     const [rezultat, setRezultat] = React.useState(0)
     const [loading, setLoading] = React.useState(false)
     const [waiting, setWaiting] = React.useState(true)
     const [pitanja, setPitanja] = React.useState([])
      const [quiz, setQuiz] = React.useState({kolicina:10,
                                             vrsta: "sports",
                                             difficulty: "easy"})
      const url = `https://opentdb.com/api.php?amount=${quiz.kolicina}&difficulty=${quiz.difficulty}&category=${table[quiz.vrsta]}&type=multiple`

      async function fetchData(){
        setLoading(true)
        setWaiting(false)
        const response = await fetch(url)
        const data = await response.json()
        setPitanja(data.results)
        setLoading(false)
        setWaiting(false)

      }
        
const handleChange = (e) => {
    const{name, value} = e.target
    setQuiz(prevValue => {
        return {...prevValue, [name]: value}
    })
}

const pokreni = () => {
 
    fetchData()
}


    const check = (nesto) => {
    if(nesto === true){setRezultat(prevValue => prevValue + 1)
        setIndex((oldIndex) => {
            const index = oldIndex + 1
            if (index > pitanja.length - 1) {
              open()
              return 0
            } else {
              return index
            }
          })
    }
    else {   setIndex((oldIndex) => {
        const index = oldIndex + 1
        if (index > pitanja.length - 1) {
          open()
          return 0
        } else {
          return index
        }
      })
}
    }

const open = () => {setWaiting(true)
alert(`Broj tačno odgovorenih pitanja je ${rezultat}`)}
    return(<AppContext.Provider value={{
        quiz, handleChange, pokreni, setQuiz, loading, waiting, pitanja, table, index, setIndex, check, rezultat

    }}>{children}</AppContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}