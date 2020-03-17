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
    .img {
      width: 250px;
      height: 250px;
      margin: 0 20px 0 0;
      position: relative;
      img {
        border-radius: 5px;
        width: 100%;
        height: 100%;
      }
      .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: 0.3s ease;
        border-radius: 5px;
        background-color: #ccc;
        text-align: center;

        :hover {
          opacity: 0.8;
        }
        i {
          color: white;
          font-size: 100px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          text-align: center;
        }
        input[type='file'] {
          display: none;
        }
      }
    }
    span {
      font-weight: bold;
      color: #1890ff;
    }
  }
`;

export const UserChats = styled.div`
  padding: 20px;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  a {
    display: flex;
    img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      margin: 10px;
    }
    .details {
      margin: 5px 10px;
      line-height: 1.5;

      .name {
        font-weight: bold;
        color: #3498db;
      }
    }
  }
`;
