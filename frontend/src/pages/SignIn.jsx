import { Col, Row } from "antd";
import { Button, Form, Input } from "antd";
import Navbar from "../components/navbar";

function SignIn() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Navbar>EVENTHUB</Navbar>

      <div className="ml-[300px] mr-[300px] mt-[30px] border-2 border-solid bg-gray-50">
        <Row>
          <Col span={8} offset={8}>
            <div className="text-l font-semibold tracking-wide text-gray-500 uppercase border-b-2 border-gray-200 pb-2 w-fit mx-auto mt-5 font-sans">
              Sign in
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={8}>
            <div className="text-center text-gray-600 text-sm mt-2 mb-2">
              New user?{" "}
              <a
                href="#"
                className="text-sky-700 font-medium hover:underline hover:text-sky-800 transition"
              >
                Sign up
              </a>
            </div>
          </Col>
        </Row>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username/Email/Phone"
            name="username/email/phone"
            rules={[
              {
                required: true,
                message: "Please input your username/email/phone!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter Password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Row>
            <Col span={8} offset={8}>
              <div className="text-gray-600 text-sm mb-4">
                <a
                  href="#"
                  className="text-sky-700 font-medium hover:underline hover:text-sky-800 transition"
                >
                  Forgot password?
                </a>
              </div>
            </Col>
          </Row>

          <Form.Item label={null}>
            <Button color="primary" variant="outlined" htmlType="submit">
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;