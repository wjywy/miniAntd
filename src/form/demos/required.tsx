import { Button, Form, Input } from 'cheesi';
import * as React from 'react';
function Required() {
  const onFinish = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <Form onFinish={onFinish} validateTrigger={['onBlur', 'onChange']}>
        <Form.Item
          name="username"
          label="用户名"
          required={true}
          hideRequired={true}
          rules={[
            { required: true, message: 'Please input username!' },
            {
              max: 8,
              message: '用户名不超过8位',
            },
          ]}
        >
          <Input placeholder="输入用户名"></Input>
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          required={true}
          rules={[
            { required: true, message: 'Please input password!' },
            {
              max: 18,
              message: '密码应在6-18位',
              validateTrigger: 'onChange',
            },
            {
              min: 6,
              message: '密码应在6-18位',
              validateTrigger: 'onChange',
            },
          ]}
        >
          <Input placeholder="输入密码"></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default Required;
