function StatsCards({ stats, profile }) {
  return (

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

      <div className="bg-slate-900 p-5 rounded-xl text-center hover:bg-slate-800 transition">
        <h2 className="text-3xl font-bold text-cyan-400">
          {profile.followers}
        </h2>
        <p className="text-slate-300">
          Followers
        </p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl text-center hover:bg-slate-800 transition">
        <h2 className="text-3xl font-bold text-cyan-400">
          {profile.following}
        </h2>
        <p className="text-slate-300">
          Following
        </p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl text-center hover:bg-slate-800 transition">
        <h2 className="text-3xl font-bold text-cyan-400">
          {stats.total_repositories}
        </h2>
        <p className="text-slate-300">
          Repositories
        </p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl text-center hover:bg-slate-800 transition">
        <h2 className="text-xl font-bold text-cyan-400">
          {stats.top_language}
        </h2>
        <p className="text-slate-300">
          Top Language
        </p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl text-center hover:bg-slate-800 transition">
        <h2 className="text-3xl font-bold text-cyan-400">
          {stats.total_stars}
        </h2>
        <p className="text-slate-300">
          Stars ⭐
        </p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl text-center hover:bg-slate-800 transition">
        <h2 className="text-3xl font-bold text-cyan-400">
          {stats.total_forks}
        </h2>
        <p className="text-slate-300">
          Forks 🍴
        </p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl text-center hover:bg-slate-800 transition">
        <h2 className="text-3xl font-bold text-cyan-400">
          {stats.public_repositories}
        </h2>
        <p className="text-slate-300">
          Public Repos 🌍
        </p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl text-center hover:bg-slate-800 transition">
        <h2 className="text-3xl font-bold text-cyan-400">
          {stats.private_repositories}
        </h2>
        <p className="text-slate-300">
          Private Repos 🔒
        </p>
      </div>

    </div>

  );
}

export default StatsCards;