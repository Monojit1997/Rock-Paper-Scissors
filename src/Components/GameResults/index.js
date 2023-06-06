const GameResults = props => {
  const {usersSelected, opponentSelected, results, againGameison} = props
  console.log(usersSelected, opponentSelected)

  const onClickPlayAgain = () => {
    againGameison()
  }

  return (
    <div>
      <h1>{usersSelected}</h1>
      <h1>{opponentSelected}</h1>
      <p>{results}</p>
      <button type="button" onClick={onClickPlayAgain}>
        Play Again
      </button>
    </div>
  )
}

export default GameResults
