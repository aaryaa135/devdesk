import { useEffect, useState } from "react";
import api from "../services/api";

import ProfileCard from "../components/ProfileCard";
import StatsCards from "../components/StatsCards";
import LanguageList from "../components/LanguageList";
import RepoList from "../components/RepoList";
import LanguageChart from "../components/LanguageChart";

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const response = await api.get(
          "/github/dashboard?user_id=1"
        );

        const repoResponse = await api.get(
          "/github/repos?user_id=1"
        );

        console.log("Dashboard Data:");
        console.log(response.data);

        console.log("Repos Data:");
        console.log(repoResponse.data);

        setDashboard(response.data);
        setRepos(repoResponse.data);

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
    return (
      <h1 className="text-white text-center mt-10">
        Loading...
      </h1>
    );
  }

  return (

    <div className="min-h-screen bg-slate-950 p-8">

      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-10">
        DevDesk Dashboard
      </h1>

      <div className="max-w-4xl mx-auto">

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

        <LanguageChart
  languages={dashboard.languages}
/>

        <RepoList
          repos={repos}
        />

      </div>

    </div>

  );

}

export default Dashboard;