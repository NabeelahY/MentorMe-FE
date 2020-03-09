import React from 'react';
import { connect } from 'react-redux';
import { deleteQuestion } from '../../actions/questions';
import { Card, Avatar } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const Question = ({ question, loading, deleteQuestion }) => {
  return (
    <Card
      className='question-card'
      hoverable
      title={<Link to={`/questions/${question.id}`}>{question.title}</Link>}
      style={{ width: 380 }}
      loading={loading}
      actions={[
        <DeleteOutlined
          key='delete'
          onClick={() => deleteQuestion(question.id)}
        />,
        <EditOutlined key='edit' />
      ]}
    >
      <Meta
        avatar={<Avatar src={question.author.avatar} />}
        description={question.question}
      />
    </Card>
  );
};

export default connect(null, { deleteQuestion })(Question);
