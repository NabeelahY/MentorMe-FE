import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuestion } from '../../actions/questions';
import { NavBar } from '../NavBar';
import { QuestionDetails } from '../../styles/Questions';

export const Details = ({ getQuestion, question }) => {
  const { id } = useParams();
  const { title, author } = question;
  console.log(question);
  useEffect(() => {
    getQuestion(id);
  }, [getQuestion, id]);
  return (
    <>
      {question && author && (
        <div>
          <NavBar />
          <QuestionDetails>
            <img src={author.avatar} alt='Author avatar' />
            <div>{title}</div>
            <div>
              <p></p>
            </div>
          </QuestionDetails>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ questionsReducer }) => ({
  question: questionsReducer.question
});

export default connect(mapStateToProps, { getQuestion })(Details);
