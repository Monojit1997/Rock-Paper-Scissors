import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #223a5f;
  background-size: cover;
  padding: 20px;
  height: 100vh;
  box-sizing: content-box;
`
export const HeadingAndScoreContainer = styled.div`
  padding: 10px;
  border: #ffffff solid 2px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  width: 60%;
  height: 150px;
  margin-top: 10px;
`

export const HeadingContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding-left: 0;
  flex-shrink: 1;
`
export const Heading = styled.li`
  color: ${props => props.color};
  font-family: 'Bree-Serif';
  font-size: 20px;
  font-weight: bold;
`
export const ScoreContainer = styled.div`
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 20%;
`
export const Score = styled.h1`
  color: #223a5f;
`
export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  padding: 10px;
`
export const GameButton = styled.div`
  border: none;
`
export const ImageElement = styled.img`
  height: 200px;
`

export const RulesButton = styled.button`
  padding: 10px;
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 100px;
  align-self: flex-end;
  margin: 10px;
`
export const PopupContainer = styled.div`
  align-self: flex-end;
`
export const CloseButton = styled.div`
  border: none;
  align-self: flex-end;
`
export const RulesImage = styled.img`
  height: 500px;
  width: 100%;
  flex-shrink: 1;
`
export const RuleImageContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  flex-direction: column;
`
