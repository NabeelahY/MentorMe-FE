import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../actions/auth';
import { Form, Input, Button, Icon } from 'antd';
import { LoginStyles } from '../../styles/Login';

const SignUp = props => {
  let history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.signUp(values).then(res => {
          history.push('/');
        });
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <LoginStyles>
      <h1>Register</h1>
      <Form name='signup' onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your Email!' }]
          })(
            <Input
              prefix={
                <Icon
                  type='mail'
                  style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,.25)' }}
                />
              }
              placeholder='Email'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your Username!' }]
          })(
            <Input
              prefix={
                <Icon
                  type='user'
                  style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,.25)' }}
                />
              }
              placeholder='Username'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={
                <Icon
                  type='lock'
                  style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,.25)' }}
                />
              }
              type='password'
              placeholder='Password'
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {props.loading ? 'Loading...' : 'Sign Up'}
          </Button>
        </Form.Item>
      </Form>
    </LoginStyles>
  );
};
const WrappedNormalSignUpForm = Form.create({ name: 'signup' })(SignUp);
const mapStateToProps = ({ authReducer }) => ({
  loading: authReducer.loading,
  error: authReducer.error
});

export default connect(mapStateToProps, { signUp })(WrappedNormalSignUpForm);
