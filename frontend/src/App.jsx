import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserHomePage from "./pages/UserHomePage";
import EventDetails from "./pages/EventDetails";
import UserProfile from "./pages/UserProfile";
import MyBookings from "./pages/MyBookings";
import CompanyHomePage from "./pages/CompanyHomePage.jsx";

const events = [
  {
    name: "Stand-up Comedy Night",
    description: "Laugh out loud with the best comedians.",
    location: "Delhi",
    type: "Comedy",
    price: "$50",
    date: "2025-06-15",
    time: "7:00 PM",
    address: "137/14 Ashok Nagar Ganaur"
  },
  {
    name: "Action Stunt Show",
    description: "Experience adrenaline-pumping stunts.",
    location: "Chandigarh",
    type: "Action",
    price: "$80",
    date: "2025-06-20",
    time: "6:00 PM",
    address: "137/14 Ashok Nagar Ganaur"
  },
  {
    name: "Thriller Escape Room",
    description: "Solve puzzles and escape in time.",
    location: "Bangalore",
    type: "Thriller",
    price: "$30",
    date: "2025-06-25",
    time: "5:00 PM",
    address: "137/14 Ashok Nagar Ganaur"
  },
  {
    name: "Spiritual Retreat",
    description: "Find peace and spiritual connection.",
    location: "Mumbai",
    type: "Spiritual",
    price: "$100",
    date: "2025-06-30",
    time: "10:00 AM",
    address: "137/14 Ashok Nagar Ganaur"
  },
];

function App() {
  return (
    <div>
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <UserHomePage events={events} /> */}
      {/* <EventDetails event={events[0]} /> */}
      {/* <UserProfile /> */}
      {/* <MyBookings events={events} /> */}
      <CompanyHomePage events={events} />
    </div>
  );
}

export default App;