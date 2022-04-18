import { FC, useState } from "react";
import { Form, Input, Select, Checkbox, Button, Steps } from "antd";
import VerifyIdentity from "./verifyIdentity";

const { Step } = Steps;

interface SignupProps {}

const Signup: FC<SignupProps> = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setCurrentStep(1);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-5/6 flex flex-col items-center">
      <h1 className="w-full text-center text-3xl font-extralight mb-10 bg-blue-500 py-2 text-white">
        Register a new profile
      </h1>
      <Steps current={currentStep}>
        <Step title="Fill your personal details" />
        <Step title="Verify your identity" />
        <Step title="All set!" />
      </Steps>
      <div className="w-full md:w-96 mt-10 p-5">
        {(() => {
          switch (currentStep) {
            case 0:
              return (
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
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The two passwords that you entered do not match!"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                      { len: 10 },
                    ]}
                  >
                    <Input addonBefore={["+91"]} />
                  </Form.Item>
                  <Form.Item
                    label="GSTIN"
                    name="gstin"
                    rules={[
                      {
                        required: true,
                        message: "Please input your GST Number!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error(
                                  "Please check this to accept the agreement"
                                )
                              ),
                      },
                    ]}
                  >
                    <Checkbox>
                      I accept the information provided are correct.
                    </Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Next
                    </Button>
                  </Form.Item>
                </Form>
              );
            case 1:
              return <VerifyIdentity setCurrentStep={setCurrentStep} />;
          }
        })()}
      </div>
    </div>
  );
};

export default Signup;
