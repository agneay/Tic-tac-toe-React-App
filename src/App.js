import { useEffect, useState } from "react";
import Cell from "./components/Cell";
const App=()=> {
  const [cells,setCells] = useState(["","","","","","","","",""])
  const [go,setGo] = useState("circle")
  const [winningMessage,setWinningMessage] = useState(null)

  const message = "It is now "+ go + "'s chance"

  const checkScore = () =>{
    const winningCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    winningCombos.forEach(array =>{
      let circleWins = array.every(cell => cells[cell] === "circle")
      if (circleWins){
        setWinningMessage("circle wins")
        return
      }

      let crossWins = array.every(cell => cells[cell] === "cross")
      if (crossWins){
        setWinningMessage("cross wins")
        return
      }
    })
  }

  useEffect(()=>{
    checkScore()
  },[cells])

  return (
    <div className="app">
      <p class="message">Tic-Tac-Toe</p>
      <div className="gameboard">
              {cells.map((cell,index) => 
                          <Cell 
                                cell={cell}
                                key={index}
                                id={index}
                                go={go}
                                setGo={setGo}
                                cells={cells}
                                setCells={setCells}
                          />)}
      </div>
      <p class="message">{winningMessage || message}</p>
    </div>
    
  );
}

export default App;
