import styled from 'styled-components';

export const QuestionContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .question-card {
    margin: 10px;
    height: 100%;
  }
`;

export const QuestionDetails = styled.div`
  margin: 80px auto;
  width: 60%;
  .status {
    margin: 20px 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 0.8rem;
    color: grey;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 1px solid #ccc;
    img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
    h3 {
      font-size: 1.3rem;
      font-weight: bold;
      padding: 10px;
    }
    .desc {
      width: 60%;
      line-height: 1.5;
    }
  }

  .links {
    margin: 50px 0;
    display: flex;
    justify-content: center;
    width: 100%;
    a {
      width: 45%;
      border: 0.5px solid #ccc;
      text-align: center;
      padding: 20px;
      font-weight: 200;
    }

    a:first-child {
      border-right: 0;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    a:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;
