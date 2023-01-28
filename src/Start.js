import React from "react"
import { useGlobalContext } from "./context"

export default function Start(){
    const{quiz, handleChange, pokreni} = useGlobalContext()
    return(
        <div className="kiki2">
        <h1>Quiz</h1>
        <div><label  htmlFor="amount">Izaberite broj pitanja:</label>
        <input type="number"
        name="kolicina"
               value={quiz.kolicina}
               id="amount"
               onChange={handleChange}
               className="kiki3"
               min={1}
               max={30}
        /></div>
        <br/>
        <div><label htmlFor="vrsta">Izaberite vrstu pitanja:</label>
        <select name="vrsta"
                id="vrsta"
                value={quiz.vrsta}
                onChange={handleChange}
                className="kiki3"
                >
                    <option value="sports">sports</option>
                    <option value="history">history</option>
                    <option value="politics">politics</option>
        </select></div>
        <br/>
        <div><label htmlFor="difficulty">Izaberite težinu pitanja:</label>
        <select name="difficulty"
                id="difficulty"
                value={quiz.difficulty}
                onChange={handleChange}
                className="kiki3"
                >
                    <option value="easy">easy</option>
                    <option value="hard">hard</option>
                    <option value="medium">medium</option>
        </select></div>
        <br/>
        <button onClick={pokreni}>Start quiz</button>
        </div>
    )
}