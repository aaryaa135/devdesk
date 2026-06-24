function Navbar({ profile }) {
  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          DevDesk
        </h1>

        <div className="flex items-center gap-3">

          <img
            src={profile.avatar_url}
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-cyan-400"
          />

          <div>
            <p className="text-white font-semibold">
              {profile.name}
            </p>

            <p className="text-slate-400 text-sm">
              @{profile.username}
            </p>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;