import styled from 'styled-components';

export const ConvoStyles = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-itams: center;

  h1 {
    text-align: center;
    margin: 20px 0;
    font-size: 2rem;

  }
`;

export const ChatStyles = styled.div`
  align-self: ${props => (props.sender ? 'flex-end' : 'flex-start')};
  width: 280px;
  height: auto;
  background: #f5f5f5;
  margin: 20px 0;
  border-radius: 5px;

  .txt {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px;

    .name {
      font-weight: 600;
      font-size: 12px;
      margin: 0 0 4px;
      color: ${props => (props.sender ? '#3498db' : '#2ecc71')};
      span {
        font-weight: normal;
        color: #b3b3b3;
      }
    }

    .msg {
      font-size: 1rem;
      margin: 5px;
      line-height: 1.5;
    }
    .timestamp {
      align-self: flex-end;
      font-size: 0.5rem;
      text-transform: uppercase;
      color: #999;
    }
  }
`;
