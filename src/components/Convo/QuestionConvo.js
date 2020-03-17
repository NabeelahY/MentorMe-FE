import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { getQuesConvo, getConvo, resetConvo } from '../../actions/convo';
import { decodeToken } from '../../utils/checkToken';
import { ConvoStyles, ChatStyles } from '../../styles/Convo';

const QuestionConvo = ({
  getQuesConvo,
  convos,
  getConvo,
  resetConvo,
  msgs
}) => {
  const { id } = useParams();
  useEffect(() => {
    getQuesConvo(id);
  }, [id, getQuesConvo]);

  let user = decodeToken();
  const { subject } = user;
  console.log(subject);

  const quesConvo = convos.find(
    c => c.mentor_id === subject || c.question_id === Number(id)
  );

  useEffect(() => {
    quesConvo && getConvo(quesConvo.id);

    return () => {
      resetConvo();
    };
  }, [quesConvo, getConvo, resetConvo]);

  const { author, mentor, messages, mentor_id } = msgs;
  return (
    <>
      {author && (
        <>
          <ConvoStyles>
            <h1>
              Chat History with{' '}
              {Number(subject) !== mentor_id
                ? mentor.username
                : author.username}
            </h1>
            {messages.map((msg, idx) => (
              <ChatStyles key={idx} sender={msg.sender === Number(subject)}>
                <div className='txt'>
                  <p className='name'>
                    {msg.sender === mentor_id
                      ? mentor.username
                      : author.username}
                  </p>
                  <p className='msg'>{msg.text}</p>
                  <span className='timestamp'>
                    {moment(msg.created_at, 'YYYYMMDD').fromNow()}
                  </span>
                </div>
              </ChatStyles>
            ))}
          </ConvoStyles>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ convoReducer }) => ({
  convos: convoReducer.convo,
  msgs: convoReducer.msgs
});
export default connect(mapStateToProps, { getQuesConvo, getConvo, resetConvo })(
  QuestionConvo
);
