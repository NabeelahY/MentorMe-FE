import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuesConvo, getConvo } from '../../actions/convo';
import { decodeToken } from '../../utils/checkToken';

const QuestionConvo = ({ getQuesConvo, convos, getConvo, msgs }) => {
  const { id } = useParams();
  useEffect(() => {
    getQuesConvo(id);
  }, [id, getQuesConvo]);

  let user = decodeToken();
  const { subject } = user;
  console.log(subject);

  const quesConvo = convos.find(
    c => c.mentor_id === subject && c.question_id === Number(id)
  );

  console.log(msgs);

  useEffect(() => {
    quesConvo && getConvo(quesConvo.id);
  }, [quesConvo, getConvo]);

  const { author, messages } = msgs;
  return (
    <>
      {author && (
        <div>
          <h1>Chat History with {author.username}</h1>
          {messages.map(msg => (
            <p>{msg.text}</p>
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ convoReducer }) => ({
  convos: convoReducer.convo,
  msgs: convoReducer.msgs
});
export default connect(mapStateToProps, { getQuesConvo, getConvo })(
  QuestionConvo
);
