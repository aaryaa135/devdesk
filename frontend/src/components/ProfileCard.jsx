function ProfileCard({ profile }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 shadow-xl text-center hover:shadow-cyan-500/20 transition-all duration-300">

      <img
        src={profile.avatar_url}
        alt="avatar"
        className="w-32 h-32 rounded-full mx-auto border-4 border-cyan-400 object-cover"
      />

      <h2 className="text-3xl font-bold text-white mt-4">
        {profile.name}
      </h2>

      <p className="text-slate-400 text-lg">
        @{profile.username}
      </p>

      <a
        href={`https://github.com/${profile.username}`}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2 rounded-lg font-semibold transition"
      >
        View GitHub
      </a>

    </div>
  );
}

export default ProfileCard;