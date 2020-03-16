import React from 'react';
import { connect } from 'react-redux';
import { editUser } from '../../actions/user';
import { Modal, Form, Input } from 'antd';

const ModalForm = ({ setShow, show, form, editUser, loading, user }) => {
  const handleSubmit = e => {
    e.preventDefault();
    form
      .validateFields()
      .then(values => {
        form.resetFields();
        editUser(values);
        console.log(values);
        setShow(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const { getFieldDecorator } = form;
  return (
    <Modal
      centered
      title='Edit Profile'
      visible={show}
      onOk={handleSubmit}
      confirmLoading={loading}
      onCancel={() => setShow(false)}
    >
      <Form name='modal' onSubmit={handleSubmit}>
        <Form.Item label='Username'>
          {getFieldDecorator('username', { initialValue: user.username })(
            <Input placeholder='Username' />
          )}
        </Form.Item>

        <Form.Item label='Email'>
          {getFieldDecorator('email', { initialValue: user.email })(
            <Input placeholder='Your email goes here' />
          )}
        </Form.Item>
        <Form.Item label='Phone Number'>
          {getFieldDecorator('phone_number', {
            initialValue: user.phone_number
          })(<Input placeholder='Your phone number goes here' />)}
        </Form.Item>
        <Form.Item label='Motto'>
          {getFieldDecorator('motto', { initialValue: user.motto })(
            <Input placeholder='Your motto goes here' />
          )}
        </Form.Item>
        <Form.Item label='Description'>
          {getFieldDecorator('description', { initialValue: user.description })(
            <Input placeholder='Your description goes here' />
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
};

const WrappedNormalModalForm = Form.create({ name: 'modal' })(ModalForm);

const mapStateToProps = ({ userReducer }) => ({
  loading: userReducer.loading,
  error: userReducer.error
});

export default connect(mapStateToProps, { editUser })(WrappedNormalModalForm);
