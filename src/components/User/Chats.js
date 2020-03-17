import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserConvo } from '../../actions/user';
import { getQuestions } from '../../actions/questions';
// import { decodeToken } from '../../utils/checkToken';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import { UserChats } from '../../styles/User';

const Chats = ({ getQuestions, getUserConvo, convos, questions }) => {
  useEffect(() => {
    getQuestions();
    getUserConvo();
  }, [getUserConvo, getQuestions]);

  // const { subject } = decodeToken();
  console.log(convos);

  return (
    <>
      <NavBar />
      <UserChats>
        <h1>Chat History</h1>
        {convos.length > 0 &&
          convos.map((con, idx) => con && (
            <Link key={idx} to={`/convo/${con.id}`}>
              <img
                src={
                  con.img
                    ? con.img
                    : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                }
                alt='chat avatar'
              />
              <div className='details'>
                <div className='name'>{con.name}</div>
                <div>{con.topic}</div>
              </div>
            </Link>
          ))}
      </UserChats>
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

    return (
      currentQues && {
        ...convo,
        id: convo.id,
        topic: currentQues.title,
        name: currentQues.author.username,
        img: currentQues.author.avatar
      }
    );
  }),
  error: userReducer.error
});

export default connect(mapStateToProps, { getUserConvo, getQuestions })(Chats);
