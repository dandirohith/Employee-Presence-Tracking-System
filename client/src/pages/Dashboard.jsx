import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Dashboard = () => {
  const [logsStateArray, setLogsStateArray] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/getlogs", {
        params: { email: user.email },
      })
      .then((response) => {
        console.log(response.data);
        setLogsStateArray(response.data);
      });
  }, [user]);

  return (
    <div className="flex flex-col w-full text-white items-center">
      <div className="text-2xl font-bold my-20 px-4 justify-center">Log</div>
      {logsStateArray.map((item, index) => {
        return (
          <div className="flex flex-col w-full md:w-1/2 justify-between px-4 py-2 border rounded-md bg-black text-white mb-6">
            <p className="flex">
              <strong>Login Time</strong>: {item.loginTime}
            </p>
            <p className="flex">
              <strong>Logout Time</strong>: {item.logoutTime}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Dashboard;
