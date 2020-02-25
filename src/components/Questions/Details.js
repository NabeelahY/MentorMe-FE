import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuestion } from '../../actions/questions';
import { NavBar } from '../NavBar';

export const Details = ({ getQuestion, question }) => {
  const { id } = useParams();

  useEffect(() => {
    getQuestion(id);
  }, [getQuestion, id]);
  return (
    <div>
      <NavBar />
  <div>{question.title}</div>
    </div>
  );
};

const mapStateToProps = ({ questionsReducer }) => ({
  question: questionsReducer.question
});

export default connect(mapStateToProps, { getQuestion })(Details);
