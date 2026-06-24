function ProfileCard({ profile }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 shadow-lg text-center">

      <img
        src={profile.avatar_url}
        alt="avatar"
        className="w-32 h-32 rounded-full mx-auto border-4 border-cyan-400"
      />

      <h2 className="text-2xl font-bold text-white mt-4">
        {profile.name}
      </h2>

      <p className="text-slate-400">
        @{profile.username}
      </p>

    </div>
  );
}

export default ProfileCard;