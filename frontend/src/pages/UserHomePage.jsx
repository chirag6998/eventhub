import React, { useState } from "react";
import { Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Navbar from "../components/navbar";
import Button from "../components/button";

const locations = ["Delhi", "Haryana", "Mumbai", "Chandigarh", "Bangalore"];

function UserHomePage({ events }) {
  const [location, setLocation] = useState("");

  return (
    <div>
      <Navbar>EVENTHUB</Navbar>

      <div className="p-6 bg-gray-30 min-h-screen relative pr-80">
        <div className="flex items-center mb-6">
          <UserOutlined className="text-4xl mr-4" />
          <Select
            placeholder="Select location"
            className="w-64"
            value={location || undefined}
            onChange={setLocation}
            options={locations.map((loc) => ({ value: loc, label: loc }))}
          />
        </div>

        <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg w-60">
          <h3 className="text-lg font-semibold mb-2">Type</h3>
          <ul className="list-none space-y-2">
            <li>Comedy</li>
            <li>Action</li>
            <li>Thriller</li>
            <li>Spiritual</li>
          </ul>
        </div>

        {events.map((event, index) => (
          <div key={index} className="mb-6 bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-bold mb-2">{event.name}</h4>
            <p className="mb-4">Description: {event.description}</p>
            <p className="mb-4">Location: {event.location}</p>
            <p className="mb-4">Type: {event.type}</p>
            <Button type="primary">Open</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserHomePage;