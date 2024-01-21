import './App.css';

import circle from './assets/circle.png'
import cross from './assets/cross.png'
import { useEffect, useState } from 'react';

const winningCombanations = [
  {combo:[0,1,2]},
  {combo:[3,4,5]},
  {combo:[6,7,8]},
  {combo:[0,3,6]},
  {combo:[1,4,7]},
  {combo:[2,5,8]},
  {combo:[0,4,8]},
  {combo:[2,4,6]}
]



function Board() {
  const [circleTurn, setCircleTurn] = useState(true)
  const [board, setBoard] = useState(Array(9).fill(0))
  const [winner, setWinner] = useState(null)


  useEffect(() => {
    checkWin();
  })


  const checkWin= () => {
    for(let i = 0; i < winningCombanations.length; i++) {
      const {combo} = winningCombanations[i]
      const a = board[combo[0]]
      const b = board[combo[1]]
      const c = board[combo[2]]
      if(a === b && b === c && a !== 0) {
        setWinner(a)
        return
      }
    }
  }
  const values ={
    0: '',
    1: circle,
    2: cross
  }

  const handleFillBoard = (index) => {
    if(winner){
      return
    }
    if(board[index] === 0 && circleTurn) {
      let newBoard = [...board]
      newBoard[index] = 1
      setBoard(newBoard)
    }else if (board[index] === 0 && !circleTurn) {
      let newBoard = [...board]
      newBoard[index] = 2
      setBoard(newBoard)
    }
    if(board[index]===0){
      setCircleTurn(circleTurn => !circleTurn)
    }
  }

  const handleClass= (index) => {
    if(board[index]==0){
      return 'able'
    }else if(winner){
      return 'win'
    }else{
      return 'filled'
    }
  }
  return(
    <div>

      <div className="board">
        {board.map((value, index) => 
          <div key={index}  onClick={() => handleFillBoard(index)} className={()=>handleClass(index)} >
            {value? <img src={values[value]} alt=""/> : null }
          </div>
        )}
      </div>
      <h3>{winner ? `Winner is ${winner==1? 'X' : 'O'}` : `Next player ${circleTurn ? 'O' : 'X'}`}</h3>

    </div>
  )
}

function App() {
  return (
    <div className="container">
      <h2 className="title">Tic tac toe game</h2>
        <Board/>
      <button className='reset' onClick={() => window.location.reload()}>Reset</button>
    </div>
  )
}

export default App
