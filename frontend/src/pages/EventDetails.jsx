import Navbar from "../components/navbar";
import { Col, Row } from "antd";
import Button from "../components/button";

function EventDetails({ event }) {
  return (
    <div>
      <Navbar>EVENTHUB</Navbar>

      <Row>
        <Col span={8} offset={8}>
          <div className="text-l font-semibold tracking-wide text-gray-500 uppercase border-b-2 border-gray-200 pb-2 w-fit mx-auto mt-5 font-sans">
            {event.name}
          </div>
        </Col>
      </Row>

      <div className="mb-6 bg-white p-6 rounded-xl shadow-md">
            <p className="mb-4 "><span className="font-bold">Description: </span>{event.description}</p>
            <p className="mb-4"><span className="font-bold">Location: </span>{event.location}</p>
            <p className="mb-4"><span className="font-bold">Type: </span>{event.type}</p>
            <p className="mb-4"><span className="font-bold">Price: </span>{event.price}</p>
            <p className="mb-4"><span className="font-bold">Address: </span>{event.address}</p>
            <p className="mb-4"><span className="font-bold">Date: </span>{event.date}</p>
            <p className="mb-4"><span className="font-bold">Time: </span>{event.time}</p>
            <Button type="primary">Book Now</Button>
      </div>
    </div>
  );
}

export default EventDetails;