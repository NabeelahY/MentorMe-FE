import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserConvo } from '../../actions/user';
import { getQuestions } from '../../actions/questions';
import { decodeToken } from '../../utils/checkToken';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';

const Chats = ({ getQuestions, getUserConvo, convos, questions }) => {
  useEffect(() => {
    getQuestions();
    getUserConvo();
  }, [getUserConvo, getQuestions]);

  const { subject } = decodeToken();
  console.log(subject);
  //   const userChats = convos.filter(convo => convo.author_id !== Number(subject));
  //   console.log(userChats);
  return (
    <>
      <NavBar />
      <div>
        {convos && convos.map((con, idx) => (
          <Link key={idx} to={`/convo/${con.id}`}>
            <div>{con.topic}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = ({ userReducer, questionsReducer }) => ({
  loading: userReducer.loading,
  questions: questionsReducer.questions,
  convos: userReducer.convos.map(convo => {
    const allQuestions = questionsReducer.questions;
    const convoId = convo.question_id;
    const currentQues = allQuestions.find(q => q.id === convoId);
    
    return  currentQues && {
      ...convo,
      id: convo.id,
      topic: currentQues.title,
      name: currentQues.author.username,
      img: currentQues.author.avatar
    };
  }),
  error: userReducer.error
});

export default connect(mapStateToProps, { getUserConvo, getQuestions })(Chats);
