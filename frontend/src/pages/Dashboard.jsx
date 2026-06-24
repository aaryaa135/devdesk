import { useEffect, useState } from "react";
import api from "../services/api";

import ProfileCard from "../components/ProfileCard";
import StatsCards from "../components/StatsCards";
import LanguageList from "../components/LanguageList";

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
    <div>

      <h1>DevDesk Dashboard</h1>

      <ProfileCard
        profile={dashboard.profile}
      />

      <StatsCards
        profile={dashboard.profile}
        stats={dashboard.stats}
      />

      <LanguageList
        languages={dashboard.languages}
      />

    </div>
  );

}

export default Dashboard;