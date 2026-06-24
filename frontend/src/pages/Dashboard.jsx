import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const response = await api.get(
          "/github/dashboard?user_id=1"
        );

        console.log("Dashboard Data:");
        console.log(response.data);

        setDashboard(response.data);

      } catch (error) {

        console.log("ERROR:");
        console.log(error);

        console.log("ERROR RESPONSE:");
        console.log(error.response);

      }

    };

    fetchDashboard();

  }, []);

  if (!dashboard) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

      <h1 className="text-6xl font-bold text-cyan-400">
        DevDesk
      </h1>

    </div>
  );
}

export default Dashboard;