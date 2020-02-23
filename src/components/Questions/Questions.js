import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuestions, getTags } from '../../actions/questions';
import { Tabs } from 'antd';
import { QuestionContainer } from '../../styles/Questions';
import { Question } from './Question';

const { TabPane } = Tabs;

const Questions = ({ getQuestions, questions, getTags, tags, loading }) => {
  const history = useHistory();
  let location = useLocation();
  useEffect(() => {
    getTags();
    getQuestions();
  }, [getTags, getQuestions]);

  const filteredQuestions = tId => questions.filter(q => q.tag.id === tId);

  const onTabChange = path => {
    history.push(`/questions/${path}`, {
      tabKey: path
    });
  };

  return (
    <>
      <Tabs
        defaultActiveKey={
          location && location.state && location.state.tabKey
            ? location.state.tabKey
            : 'questions'
        }
        size='large'
        onChange={onTabChange}
        style={{ textAlign: 'center' }}
      >
        {tags.map(tag => (
          <TabPane tab={`${tag.tag}`} key={tag.id}>
            <Route exact path={`/questions/${tag.id}`}>
              <QuestionContainer>
                {filteredQuestions(tag.id).map(ques => (
                  <Question question={ques} loading={loading} key={ques.id} />
                ))}
              </QuestionContainer>
            </Route>
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

const mapStateToProps = ({ questionsReducer }) => ({
  loading: questionsReducer.loading,
  questions: questionsReducer.questions,
  tags: questionsReducer.tags,
  error: questionsReducer.error
});
export default connect(mapStateToProps, { getTags, getQuestions })(Questions);
