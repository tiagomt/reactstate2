import React, { useState } from "react"
import "./style.css"

export default function App() {
    // declaração State
    // useState()

    // pegando array e a função(por ela que o array poderá ser modificado) retornada por useState
    // const result = React.useState("Yes")

    // O valor definido entre parenteses, será o valor padrao do State, que depois é atribuido a isImportant
    // destructuring array(pegando o que for utilizar)
    const [isImportant, setIsImportant] = React.useState("Yes")

    // Definindo novo valor para isImportant através da função
    // setIsImportant("No")

    function handleClick() {

        setIsImportant("No")

    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                {/* <h1>Yes</h1> */}
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
