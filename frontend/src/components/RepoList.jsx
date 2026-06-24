function RepoList({ repos }) {

  return (

    <div className="bg-slate-900 rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        Repositories
      </h2>

      {
        repos.slice(0, 10).map((repo) => (

          <div
            key={repo.name}
            className="border-b border-slate-700 py-4 hover:bg-slate-800 px-3 rounded-lg transition"
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

  );

}

export default RepoList;