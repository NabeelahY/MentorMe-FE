import styled from 'styled-components';

export const NavStyle = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;
  color: #fff;
  background-color: #ccc;
  button {
    color: #ccc;
    padding: 0.5rem;
  }
  .logo {
    color: inherit;
    margin: 10px 20px;
  }

  .user {
    display: flex;
    justify-content: space-around;
    align-self: flex-end;
    div,
    a {
      color: inherit;
      margin: 10px 20px;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
