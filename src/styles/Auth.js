import styled from 'styled-components';

export const AuthStyles = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  h1 {
    font-size: 2rem;
    margin: 10px 0;
    color: #d3d3d3;
  }
  form {
    width: 300px;
    button {
      font-size: 1rem;
      width: 100%;
    }
  }
`;
