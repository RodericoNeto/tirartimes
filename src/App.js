
import './App.css';
import {  useState } from 'react'
import "bootswatch/dist/minty/bootstrap.min.css";

function App() {


  const [stringNames, setStringNames] = useState('')
  const [numPlayers, setNumPlayers] = useState()
  const [arrayNames, setArrayNames] = useState([])
  const [numTimes, setNumTimes] = useState()
  const [listaTimes, setListaTimes] = useState([])


  function calcNumTimes() {
    return Math.trunc(arrayNames.length / numPlayers)
  }


  function displayStringNames() {
    setArrayNames(stringNames.split(" "))
    setNumTimes(calcNumTimes())
    console.log(`Os jogadores são ${arrayNames}. Cada time tem ${numPlayers}, então O número de times é ${numTimes}`)
  }

  function displayNames(){
    displayStringNames()
    let newArray = [...arrayNames]
    let aleatoryTeams = []
    for(let i=1; i<=(arrayNames.length);i++){      
      const indexAleatory = Math.floor(Math.random() * newArray.length)
      if(i%numPlayers==0){
        console.log(newArray[indexAleatory])
        aleatoryTeams.push(newArray[indexAleatory])
        console.log("--------------")
        aleatoryTeams.push('----------')
        newArray.splice(indexAleatory, 1)
      }
      else{
        console.log(newArray[indexAleatory])
        aleatoryTeams.push(newArray[indexAleatory])
        newArray.splice(indexAleatory, 1)
      }
    }
    setListaTimes(aleatoryTeams)
  }







  return (
    <div className="App">
      <h1 className='r-title bg-primary'>Sorteio de times</h1>
      <div className='infos-container'>
        <div className="form-group">
          <label htmlFor="playersName" className="form-label mt-4">Jogadores</label>
          <textarea rows={4} type="text" className="form-control" id="playersName" placeholder="nome1 nome2 nome3..." onInput={(e) => { setStringNames(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="numPlayers" className="form-label mt-4">Nº de jogadores por time</label>
          <input type="number" className="form-control" id="numPlayers" onInput={(e) => { setNumPlayers(e.target.value) }} />
        </div>
      </div>


      {/* <div>
        <button onClick={displayStringNames}>Gerar</button>
      </div> */}
      <div className='button-show-container'>
        <button type='button' onClick={displayNames} className='btn btn-primary'>Tirar times</button>
      </div>

      <div className='teams-container'>{listaTimes.map((i)=>{
        return <h2>{i}</h2>
      })}</div>

      <div>
        {/* <RenderTeams numPlayers={numPlayers} arrayNames={arrayNames} /> */}
      </div>
    </div>
  );
}

export default App;
