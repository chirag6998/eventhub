import { Button, Form, Input, DatePicker, TimePicker } from "antd";
import { useState } from "react";

function AddEvent({ onAddEvent, onCancel }) {
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        const formattedEvent = {
            eventname: values.eventname,
            description: values.description,
            type: values.type,
            location: values.location,
            price: values.price,
            date: values.date.format("YYYY-MM-DD"),
            time: values.time.format("HH:mm")
            
        };
        onAddEvent(formattedEvent);
        setLoading(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg mx-auto w-[90%] lg:w-[60%] mt-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold tracking-wide text-gray-700 uppercase">Add a New Event</h2>
            </div>

            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item label="Event Name" name="eventname" rules={[{ required: true, message: "Please input the event name!" }]}>
                    <Input className="rounded-xl" placeholder="Enter event name" />
                </Form.Item>

                <Form.Item label="Description" name="description" rules={[{ required: true, message: "Please input the description!" }]}>
                    <Input.TextArea className="rounded-xl" placeholder="Enter event description" rows={3} />
                </Form.Item>

                <Form.Item label="Type" name="type" rules={[{ required: true, message: "Please input the Type!" }]}>
                    <Input className="rounded-xl" placeholder="Enter event Type" />
                </Form.Item>

                <Form.Item label="Location" name="location" rules={[{ required: true, message: "Please input the location!" }]}>
                    <Input className="rounded-xl" placeholder="Enter event location" />
                </Form.Item>

                <Form.Item label="Price" name="price" rules={[{ required: true, message: "Please input the price!" }]}>
                    <Input className="rounded-xl" placeholder="Enter event price" />
                </Form.Item>

                <Form.Item label="Date" name="date" rules={[{ required: true, message: "Please select a date!" }]}>
                    <DatePicker className="w-full rounded-xl" format="YYYY-MM-DD" />
                </Form.Item>

                <Form.Item label="Time" name="time" rules={[{ required: true, message: "Please select a time!" }]}>
                    <TimePicker className="w-full rounded-xl" format="HH:mm" />
                </Form.Item>

                <Form.Item>
                    <div className="flex justify-between">
                        <Button loading={loading} type="primary" htmlType="submit" className="rounded-xl bg-blue-600 hover:bg-blue-700">
                            Submit
                        </Button>
                        <Button type="default" onClick={onCancel} className="rounded-xl bg-gray-200 hover:bg-gray-300">
                            Cancel
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddEvent;
