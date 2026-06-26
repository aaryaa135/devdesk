function RepoAnalytics({ repos }) {

  if (!repos.length) return null;

  const mostStarred = [...repos].sort(
    (a, b) => b.stars - a.stars
  )[0];

  const mostForked = [...repos].sort(
    (a, b) => b.forks - a.forks
  )[0];

  const latestRepo = [...repos].sort(
    (a, b) =>
      new Date(b.updated_at) -
      new Date(a.updated_at)
  )[0];

  return (

    <div className="bg-slate-900 rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Repository Analytics
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="bg-slate-800 rounded-xl p-5">

          <h3 className="text-yellow-400 font-bold">
            ⭐ Most Starred
          </h3>

          <p className="text-white mt-2 font-semibold">
            {mostStarred.name}
          </p>

          <p className="text-slate-400">
            {mostStarred.stars} Stars
          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-5">

          <h3 className="text-cyan-400 font-bold">
            🍴 Most Forked
          </h3>

          <p className="text-white mt-2 font-semibold">
            {mostForked.name}
          </p>

          <p className="text-slate-400">
            {mostForked.forks} Forks
          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-5">

          <h3 className="text-green-400 font-bold">
            🆕 Recently Updated
          </h3>

          <p className="text-white mt-2 font-semibold">
            {latestRepo.name}
          </p>

          <p className="text-slate-400">
            {new Date(
              latestRepo.updated_at
            ).toLocaleDateString()}
          </p>

        </div>

      </div>

    </div>

  );

}

export default RepoAnalytics;