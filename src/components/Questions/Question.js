import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
const { Meta } = Card;

export const Question = ({ question, loading }) => {
  return (
    <Card
      className='question-card'
      hoverable
      title={question.title}
      style={{ width: 380 }}
      loading={loading}
    >
      <Meta
        avatar={<Avatar src={question.author.avatar} />}
        description={question.question}
      />
    </Card>
  );
};
