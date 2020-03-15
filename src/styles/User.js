import styled from 'styled-components';

export const UserContainer = styled.div`
  width: 700px;
  margin: 80px auto;
  line-height: 2;

  .edit {
    margin: 10px;
    :hover {
      cursor: pointer;
      color: #1890ff;
    }
    span {
      margin: 0 10px;
    }
  }

  .main {
    display: flex;
    align-items: center;
    img {
      border-radius: 5px;
      width: 250px;
      height: 250px;
      margin: 0 20px 0 0;
    }
    span {
      font-weight: bold;
      color: #1890ff;
    }
  }
`;
