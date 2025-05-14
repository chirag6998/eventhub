import Navbar from "../components/navbar";
import { UserOutlined } from "@ant-design/icons";
import Button from "../components/button";

function UserProfile() {
  const firstName = "Aman";
  const lastName = "Malhotra";
  const userName = 'Aman2822';
  const email = 'amanmalhotra6413@gmail.com';
  const phone = '8950067431';

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Navbar>EVENTHUB</Navbar>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <div className="flex flex-col items-center mb-8">
          <UserOutlined className="text-6xl text-gray-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-700">{firstName + " " + lastName}</h1>
        </div>
        <div className="space-y-6">
          <div className="text-lg font-semibold text-gray-600 border-b pb-2">
            <span className="font-bold">Username:</span> {userName}
          </div>
          <div className="text-lg font-semibold text-gray-600 border-b pb-2">
            <span className="font-bold">Email:</span> {email}
          </div>
          <div className="text-lg font-semibold text-gray-600 border-b pb-2">
            <span className="font-bold">Phone:</span> {phone}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button type="primary">Change Password</Button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
