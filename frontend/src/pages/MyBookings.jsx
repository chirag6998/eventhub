import Navbar from "../components/navbar";
import { Divider } from "antd";

function MyBookings({ events }) {
  // Splitting the events into previous and upcoming
  const previousBookings = events.slice(0, 2);
  const upcomingBookings = events.slice(2);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar>EVENTHUB</Navbar>
      <div className="flex flex-row w-full h-full">
        {/* Previous Bookings Section */}
        <div className="w-1/2 p-6 border-r border-gray-300">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Upcoming Bookings
          </h2>
          {upcomingBookings.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 mb-4"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {event.name}
              </h3>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-gray-500">Location: {event.location}</p>
              <p className="text-gray-500">Date: {event.date}</p>
              <p className="text-gray-500">Time: {event.time}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <Divider type="vertical" className="h-full" />

        {/* Upcoming Bookings Section */}
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Previous Bookings
          </h2>
          {previousBookings.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 mb-4"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {event.name}
              </h3>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-gray-500">Location: {event.location}</p>
              <p className="text-gray-500">Date: {event.date}</p>
              <p className="text-gray-500">Time: {event.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
