import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getConvo } from '../../actions/convo';
import { decodeToken } from '../../utils/checkToken';

let user = decodeToken();
const { subject } = user;
console.log(subject)
const QuestionConvo = ({ getConvo, convos }) => {
  const { id } = useParams();
    useEffect(() => {
        getConvo(id);
    }, []);
    return <div>Hello</div>;
};

const mapStateToProps = ({ convoReducer }) => ({
  convos: convoReducer.convo
  .filter(
    c => c.mentor_id === subject
  )
});
export default connect(mapStateToProps, { getConvo })(QuestionConvo);
