import React from 'react';
import { connect } from 'react-redux';
import { postQuestions } from '../../actions/questions';
import 'antd/dist/antd.css';
import { Modal, Form, Input, Select } from 'antd';

const ModalForm = ({ setVisibility, visible, form, postQuestions, tags }) => {

  const handleSubmit = e => {
    e.preventDefault();
    form
      .validateFields()
      .then(values => {
        form.resetFields();
        postQuestions(values);
        setVisibility(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const { getFieldDecorator } = form;
  return (
    <Modal
      centered
      title='Ask a Question'
      visible={visible}
      onOk={handleSubmit}
      onCancel={() => setVisibility(false)}
    >
      <Form name='modal' onSubmit={handleSubmit}>
        <Form.Item label='Title'>
          {getFieldDecorator('title', {
            rules: [
              {
                required: true,
                message: 'Please input the title of your question!'
              }
            ]
          })(<Input placeholder='Title' />)}
        </Form.Item>

        <Form.Item label='Question'>
          {getFieldDecorator('question', {
            rules: [{ required: true, message: 'Question is required' }]
          })(<Input.TextArea placeholder='Your question goes here' />)}
        </Form.Item>

        <Form.Item label='Tag'>
          {getFieldDecorator('tag_id', {
            rules: [{ required: true, message: 'Choose a tag' }]
          })(
            <Select>
              {tags.map(tag => (
                <Select.Option key={tag.id} value={tag.id}>
                  {tag.tag}
                </Select.Option>
              ))}
            </Select>
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
};

const WrappedNormalModalForm = Form.create({ name: 'modal' })(ModalForm);

const mapStateToProps = ({ questionsReducer }) => ({
  loading: questionsReducer.loading,
  error: questionsReducer.error,
  tags: questionsReducer.tags
});

export default connect(mapStateToProps, { postQuestions })(
  WrappedNormalModalForm
);
