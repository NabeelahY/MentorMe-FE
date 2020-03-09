import styled from 'styled-components';

export const QuestionContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .question-card {
    margin: 10px;
  }
`;

export const QuestionDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ccc;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
`;
