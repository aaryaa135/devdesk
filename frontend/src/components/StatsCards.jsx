function StatsCards({ stats, profile }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">

      <div className="bg-slate-900 p-5 rounded-xl text-center">
        <h2 className="text-3xl font-bold text-cyan-400">
          {profile.followers}
        </h2>

        <p className="text-slate-300">
          Followers
        </p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl text-center">
        <h2 className="text-3xl font-bold text-cyan-400">
          {profile.following}
        </h2>

        <p className="text-slate-300">
          Following
        </p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl text-center">
        <h2 className="text-3xl font-bold text-cyan-400">
          {stats.total_repositories}
        </h2>

        <p className="text-slate-300">
          Repositories
        </p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl text-center">
        <h2 className="text-xl font-bold text-cyan-400">
          {stats.top_language}
        </h2>

        <p className="text-slate-300">
          Top Language
        </p>
      </div>

    </div>
  );
}

export default StatsCards;