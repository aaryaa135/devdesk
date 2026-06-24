import { useState } from "react";
import RepoModal from "./RepoModal";

function RepoList({ repos }) {

  const [selectedRepo, setSelectedRepo] = useState(null);

  if (repos.length === 0) {
    return (
      <div className="bg-slate-900 rounded-2xl p-6 mt-6 text-center text-slate-400">
        No repositories found.
      </div>
    );
  }

  return (

    <>
      <div className="bg-slate-900 rounded-2xl p-6 mt-6">

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">
          Repositories
        </h2>

        {
          repos.slice(0, 10).map((repo) => (

            <div
              key={repo.name}
              onClick={() => setSelectedRepo(repo)}
              className="
                border-b border-slate-700
                py-4 px-3 rounded-lg
                hover:bg-slate-800
                transition cursor-pointer
              "
            >

              <h3 className="text-lg font-semibold text-white">
                {repo.name}
              </h3>

              <p className="text-slate-400 mt-1">
                {repo.language || "Unknown"}
              </p>

              <div className="flex gap-6 mt-3 text-cyan-400">

                <span>
                  ⭐ {repo.stars}
                </span>

                <span>
                  🍴 {repo.forks}
                </span>

              </div>

            </div>

          ))
        }

      </div>

      <RepoModal
        repo={selectedRepo}
        onClose={() => setSelectedRepo(null)}
      />
    </>

  );

}

export default RepoList;