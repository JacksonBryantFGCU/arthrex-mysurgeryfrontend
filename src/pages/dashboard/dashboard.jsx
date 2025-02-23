import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const loginInfo = [
  { username: "jax2025!", password: "Georgie1!", surgery: "Spinal fusion", surgerydescription: "This surgery involves ...." },
  { username: "jax2024!", password: "Georgie1", surgery: "Total Hip Replacment" },
  { username: "jax2023!", password: "Georgie1@", surgery: "Meniscus Tear" }
];

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (location.state?.user) {
      const foundUser = loginInfo.find(u => u.username === location.state.user.username);
      if (foundUser) {
        setUser(foundUser);
      }
    } else {
      navigate("/login"); // Redirect if no user data is found
    }
  }, [location.state, navigate]);

  if (!user) {
    return <p>Loading...</p>; // Show a loading state while user data is being set
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h2>
        <h2>Surgery: {user.surgery}</h2>
        <p>Surgery Description: {user.surgerydescription}</p>
        <button
          onClick={() => navigate("/")}
          className=" bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
