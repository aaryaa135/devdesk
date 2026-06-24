function TopRepos({ repos }) {

  return (

    <div className="bg-slate-900 rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        Top Repositories
      </h2>

      {
        repos.map((repo, index) => (

          <div
            key={repo.name}
            className="flex justify-between py-3 border-b border-slate-700"
          >

            <div>

              <h3 className="text-white font-semibold">
                {index + 1}. {repo.name}
              </h3>

              <p className="text-slate-400">
                {repo.language || "Unknown"}
              </p>

            </div>

            <div className="text-cyan-400 font-bold">
              ⭐ {repo.stars}
            </div>

          </div>

        ))
      }

    </div>

  );

}

export default TopRepos;