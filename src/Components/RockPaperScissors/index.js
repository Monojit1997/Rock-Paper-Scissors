import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import GameResults from '../GameResults/index'

import {
  MainContainer,
  HeadingAndScoreContainer,
  HeadingContainer,
  Heading,
  ScoreContainer,
  Score,
  GameContainer,
  ButtonContainer,
  GameButton,
  ImageElement,
  RulesButton,
  PopupContainer,
  CloseButton,
  RulesImage,
  RuleImageContainer,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    score: 0,
    usersSelected: '',
    opponentSelected: '',
    resultsShowing: false,
    results: '',
  }

  againGameison = () => {
    this.setState({resultsShowing: false})
  }

  onClickGameStart = event => {
    const randomNumber = Math.floor(Math.random() * 2 + 1)
    const usersSelectedValue = event.target.alt
    const opponentSelectedValue = choicesList[randomNumber].id
    if (usersSelectedValue === opponentSelectedValue) {
      this.setState(prevState => ({
        usersSelected: usersSelectedValue,
        opponentSelected: opponentSelectedValue,
        resultsShowing: true,
        results: 'IT IS DRAW',
        score: prevState.score + 0,
      }))
    }
  }

  scoreContainer = () => {
    const {score} = this.state
    return (
      <HeadingAndScoreContainer>
        <HeadingContainer>
          <Heading color="#ffffff">Rock</Heading>
          <Heading color="#ffffff">Paper</Heading>
          <Heading color="#ffffff">Scissors</Heading>
        </HeadingContainer>
        <ScoreContainer>
          <Score color="#223a5f">Score</Score>
          <Score>{score}</Score>
        </ScoreContainer>
      </HeadingAndScoreContainer>
    )
  }

  GameContainer = () => (
    <GameContainer>
      <ButtonContainer>
        {choicesList.map(eachButton => (
          <GameButton
            key={eachButton.id}
            onClick={this.onClickGameStart}
            data-testid={`${eachButton.id.toLowerCase()}Button`}
          >
            <ImageElement src={eachButton.imageUrl} alt={eachButton.id} />
          </GameButton>
        ))}
      </ButtonContainer>
    </GameContainer>
  )

  ReactPopUp = () => (
    <PopupContainer>
      <Popup modal trigger={<RulesButton>Rule</RulesButton>}>
        {close => (
          <>
            <RuleImageContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </RuleImageContainer>
          </>
        )}
      </Popup>
    </PopupContainer>
  )

  render() {
    const {
      usersSelected,
      opponentSelected,
      resultsShowing,
      results,
    } = this.state
    console.log(usersSelected, opponentSelected, resultsShowing)
    return (
      <MainContainer>
        {this.scoreContainer()}
        {resultsShowing === true ? (
          <GameResults
            usersSelected={usersSelected}
            opponentSelected={opponentSelected}
            results={results}
            againGameison={this.againGameison}
          />
        ) : (
          this.GameContainer()
        )}
        {this.ReactPopUp()}
      </MainContainer>
    )
  }
}

export default RockPaperScissors
