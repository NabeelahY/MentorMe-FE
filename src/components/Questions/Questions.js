import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { getQuestions, getTags } from '../../actions/questions';
import { Tabs } from 'antd';
import { QuestionContainer } from '../../styles/Questions';

const { TabPane } = Tabs;

const Questions = props => {
  const { getQuestions, questions, getTags, tags } = props;
  useEffect(() => {
    getTags();
    // getQuestions();
  }, [getTags]);

  return (
    <QuestionContainer>
      <Tabs
        defaultActiveKey='1wb2wh gfvc'
        size='large'
        // tabPosition={'left'}
        style={{ textAlign: 'center'}}
      >
        {tags.map(tag => (
          <TabPane tab={`${tag.tag}`} key={tag.id}>
            <h1>Hello</h1>
          </TabPane>
        ))}
      </Tabs>
    </QuestionContainer>
  );
};

const mapStateToProps = ({ questionsReducer }) => ({
  loading: questionsReducer.loading,
  questions: questionsReducer.questions,
  tags: questionsReducer.tags,
  error: questionsReducer.error
});
export default connect(mapStateToProps, { getTags, getQuestions })(Questions);
