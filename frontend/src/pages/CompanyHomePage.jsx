import { useState } from "react";
import Navbar from "../components/navbar";
import { UserOutlined } from "@ant-design/icons";
import Button from "../components/button";
import AddEvent from "./AddEvent";

function CompanyHomePage({ initialEvents = [] }) {
  const [events, setEvents] = useState(initialEvents);
  const [showAddEventForm, setShowAddEventForm] = useState(false);

  const handleAddEvent = (newEvent) => {
    setEvents([newEvent, ...events]);
    setShowAddEventForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar>EVENTHUB</Navbar>

      <div className="flex flex-col items-center mt-12 mb-8">
        <UserOutlined className="text-6xl text-gray-500 mb-4" />
        <h1 className="text-3xl font-bold text-gray-700 mb-2">Company Name</h1>
      </div>

      <div className="mx-auto w-[90%] lg:w-[80%] mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-700">Events</h2>
          <Button
            type="primary"
            className="w-40"
            onClick={() => setShowAddEventForm(true)}
          >
            + Add Event
          </Button>
        </div>

        {showAddEventForm && (
          <AddEvent
            onAddEvent={handleAddEvent}
            onCancel={() => setShowAddEventForm(false)}
          />
        )}

        <div className="grid gap-8 grid-cols-1">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {event.eventname}
              </h3>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Description:</span>{" "}
                {event.description}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Type:</span> {event.type}
              </p>
              <p className="text-gray-500 mb-2">
                <span className="font-bold">Location:</span> {event.location}
              </p>
              <p className="text-gray-500 mb-2">
                <span className="font-bold">Price:</span> {event.price}
              </p>
              <p className="text-gray-500 mb-2">
                <span className="font-bold">Date:</span> {event.date}
              </p>
              <p className="text-gray-500">
                <span className="font-bold">Time:</span> {event.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyHomePage;
