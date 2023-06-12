import { useState } from "react"

function RenderTeams(props) {


    let arrayNamesComp = props.arrayNames
    let numPlayersComp = props.numPlayers
    let timeI = []



    // for(let i=0;i<numPlayersComp;i++){
        
    //     const indexAleatory = Math.floor(Math.random() * arrayNamesComp.length)
    //     timeI.push(arrayNamesComp[indexAleatory])
    //     arrayNamesComp.splice(indexAleatory, 1)
    //     console.log(arrayNamesComp[indexAleatory])
    //     console.log(timeI)
    // }

    for(let i=0;i<=props.arrayNames;i++){
        
        const indexAleatory = Math.floor(Math.random() * arrayNamesComp.length)
        timeI.push(arrayNamesComp[indexAleatory])
        arrayNamesComp.splice(indexAleatory, 1)
        console.log(timeI)

    }

    return (
        <div>
            <h1>lista aqui</h1>
            <div>{timeI.map((i) => {
                return <h2>{i}</h2>
            })}</div>
        </div>

    )
}

export default RenderTeams