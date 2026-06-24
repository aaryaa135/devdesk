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
  const [search, setSearch] = useState("");

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const response = await api.get(
          "/github/dashboard?user_id=1"
        );

        const repoResponse = await api.get(
          "/github/repos?user_id=1"
        );

        setDashboard(response.data);
        setRepos(repoResponse.data);

      } catch (error) {

        console.log(error);

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

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(
      search.toLowerCase()
    )
  );

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

        <div className="mt-6">

          <input
            type="text"
            placeholder="Search repositories..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              bg-slate-900
              text-white
              p-3
              rounded-xl
              border
              border-slate-700
              focus:outline-none
              focus:border-cyan-400
            "
          />

        </div>

        <RepoList
          repos={filteredRepos}
        />

      </div>

    </div>

  );

}

export default Dashboard;