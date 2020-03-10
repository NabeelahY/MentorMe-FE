import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuestion } from '../../actions/questions';
import { NavBar } from '../NavBar';
import { QuestionDetails } from '../../styles/Questions';
import { Tag } from 'antd';
import moment from 'moment';

export const Details = ({ getQuestion, c_question }) => {
  const { id } = useParams();
  const { title, author, question, tag, isAnswered, created_at } = c_question;
  useEffect(() => {
    getQuestion(id);
  }, [getQuestion, id]);
  return (
    <>
      {question && author && (
        <div>
          <NavBar />
          <QuestionDetails>
            <div className='status'>
              <span>
                Status:{' '}
                <Tag color={isAnswered ? 'green' : 'cyan'}>
                  {isAnswered ? 'Answered' : 'Not Answered'}
                </Tag>
              </span>
              <span>Tag: {tag.tag}</span>
              <span>Created by: {author.username}</span>
              <span>
                Date created: {moment(created_at).format('MMMM Do, YYYY')}
              </span>
            </div>
            <div className='main'>
              <img src={author.avatar} alt='Author avatar' />
              <h3>{title}</h3>
              <div className='desc'>
                <p>{question}</p>
              </div>
            </div>
            <div className='links'>
              <Link to={`/convo/${id}`}>Have an Answer?</Link>
              <Link to='/'>Back to home page</Link>
            </div>
          </QuestionDetails>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ questionsReducer }) => ({
  c_question: questionsReducer.question
});

export default connect(mapStateToProps, { getQuestion })(Details);
