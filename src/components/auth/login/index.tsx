import { Form, Input, Button, Checkbox } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };

  return (
    <div className="w-full md:w-96 mt-10 p-5">
      <h1 className=" text-center text-3xl font-extralight mb-10 bg-blue-500 py-2 text-white">
        Log In to continue
      </h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="w-full"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <hr />
      <div className="text-center mt-4 font-semibold">
        <p>
          or&nbsp;&nbsp;
          <Link className="underline" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
