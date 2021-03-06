import styled from 'styled-components'

export const WelcomeProgramCardsStyle = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .welcome-text {
    height: 3rem;
    width: 29rem;
    color: #1c4b81;
    font-size: 30px;
    font-weight: 600;
    padding-top: 3rem;
  }
  .program-card-deck-wrapper{
    height: 25rem;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    .deck-size {
      margin: 2rem;
      height: 15rem;
      width: 30rem;
      border-radius: 0.5rem;
      border: 3px solid #dee7f2;
      cursor: pointer;
      &:hover{
        background-color: #ededf1;
        border-color: #c6cad7
      }
      .deck-name {
        width: auto;
        height: 3rem;
        font-size: 1.25rem;
        font-weight: 500;
        color: #385fae;
        line-height: 3rem;
        text-align: center;
        margin: auto;
      }
      &:focus {
        background: #e3e4e8;
        outline-color: none;
        outline: none;
      }
      .deck-description-wrapper {
        height: 12rem;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .deck-description{
          width: 80%;
          font-size: 1.2rem;
          font-weight: 300;
          color: #969baa;
          padding-bottom: 1.5rem;
        }
      }
      }
    }
    
  .button-start {
    width: 8rem;
    height: 3rem;
    margin-bottom: 5rem;
    border-radius: 2rem;
    font-size: 1rem;
    border: none;
    background-image: linear-gradient(#4cb7e0, #47f4eb); 
    color: white;
    outline: none;
    cursor: pointer;
    &:hover{
      background-image: linear-gradient( to top,#0fa0d8,#53d6cf );
    }
    &:focus{
      border: 3px solid white;
    }
  }

  @media only screen and (max-width: 1100px){
  .button-start{
    margin: 6rem 0 0 0
  }
}
`