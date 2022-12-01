import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import { ILoginData } from '@interfaces/auth';
import authService from '@services/auth';
import { setUser } from '@store/slices/auth';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onFinish = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      // event.preventDefault();
      setIsLoading(true);

      const loginData: ILoginData = {
        email: event?.['email'],
        password: event?.['password'],
        remember: event?.['remember'],
      };

      const res = await authService.login(loginData);
      dispatch(
        setUser({
          ...res.data,
        })
      );
    } catch (error) {
      // console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <React.Fragment>
      <div style={{ textAlign: 'center' }}>
        <h1>Test</h1>
        <p>{auth.data.email}</p>
      </div>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{ maxWidth: '500px', margin: '0 auto' }}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={isLoading}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export { LoginForm };
