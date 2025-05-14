import { Col, Row } from "antd";
import { Button, Form, Input, Radio } from "antd";
import Navbar from "../components/navbar.jsx";

function SignUp() {
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
              Create New Account
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={8}>
            <div className="text-center text-gray-600 text-sm mt-2 mb-2">
              Already have an account?{" "}
              <a
                href="#"
                className="text-sky-700 font-medium hover:underline hover:text-sky-800 transition"
              >
                Sign In
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
            label="First Name"
            name="firstname"
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              { required: true, message: "Please input your Last Name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your Email!" },
              { type: "email", message: "Please enter a valid Email!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please enter your Phone Number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter a Username!" }]}
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

          <Form.Item
            label="Re-Enter Password"
            name="reenterpassword"
            rules={[
              { required: true, message: "Please re-enter your Password!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label="Account Type">
            <Radio.Group>
              <Radio value="As a user"> As a user </Radio>
              <Radio value="As a company"> As a company </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label={null}>
            <Button color="primary" variant="outlined" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;