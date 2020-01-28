import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions/auth';
import { Form, Input, Button, Icon } from 'antd';
import { LoginStyles } from '../../styles/Login';

const Login = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.logIn(values);
        console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <LoginStyles>
      <Form name='login' onSubmit={handleSubmit}>
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
            {props.loading ? 'Loading...' : 'Log in'}
          </Button>
        </Form.Item>
      </Form>
    </LoginStyles>
  );
};
const WrappedNormalLoginForm = Form.create({ name: 'login' })(Login);
const mapStateToProps = ({ authReducer }) => ({
  loading: authReducer.loading,
  error: authReducer.error
});

export default connect(mapStateToProps, { logIn })(WrappedNormalLoginForm);