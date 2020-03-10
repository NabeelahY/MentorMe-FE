import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../actions/auth';
import { Form, Input, Button, Icon } from 'antd';
import { LoginStyles } from '../../styles/Login';

const Login = props => {
  let history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.logIn(values).then(res => {
          if (res.status === 200) {
            history.push('/');
          }
        });
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <LoginStyles>
      <h1>Login</h1>
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
