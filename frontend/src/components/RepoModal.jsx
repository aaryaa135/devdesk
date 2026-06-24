function RepoModal({ repo, onClose }) {

  if (!repo) return null;

  return (

    <div
      className="
        fixed inset-0
        bg-black/80
        backdrop-blur-sm
        flex items-center justify-center
        z-50
        p-4
      "
      onClick={onClose}
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-slate-900
          border border-slate-700
          rounded-2xl
          p-8
          w-full
          max-w-2xl
          shadow-2xl
        "
      >

        <div className="flex justify-between items-start">

          <div>

            <h2 className="text-3xl font-bold text-cyan-400">
              {repo.name}
            </h2>

            <p className="text-slate-400 mt-2">
              {repo.description || "No description available."}
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              text-slate-400
              hover:text-red-400
              text-2xl
              font-bold
            "
          >
            ×
          </button>

        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="bg-slate-800 p-4 rounded-xl">

            <p className="text-slate-400 text-sm">
              Language
            </p>

            <h3 className="text-white font-semibold mt-1">
              {repo.language || "Unknown"}
            </h3>

          </div>

          <div className="bg-slate-800 p-4 rounded-xl">

            <p className="text-slate-400 text-sm">
              Visibility
            </p>

            <h3 className="text-white font-semibold mt-1">
              {repo.private ? "Private" : "Public"}
            </h3>

          </div>

          <div className="bg-slate-800 p-4 rounded-xl">

            <p className="text-slate-400 text-sm">
              Stars
            </p>

            <h3 className="text-yellow-400 font-bold mt-1">
              ⭐ {repo.stars}
            </h3>

          </div>

          <div className="bg-slate-800 p-4 rounded-xl">

            <p className="text-slate-400 text-sm">
              Forks
            </p>

            <h3 className="text-cyan-400 font-bold mt-1">
              🍴 {repo.forks}
            </h3>

          </div>

        </div>

        <div className="mt-6 bg-slate-800 p-4 rounded-xl">

          <p className="text-slate-400 text-sm">
            Last Updated
          </p>

          <p className="text-white mt-1">
            {repo.updated_at
              ? new Date(repo.updated_at).toLocaleDateString()
              : "Unknown"}
          </p>

        </div>

        <div className="flex gap-4 mt-8">

          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              px-5
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            Open on GitHub
          </a>

          <button
            onClick={onClose}
            className="
              bg-slate-700
              hover:bg-slate-600
              px-5
              py-3
              rounded-xl
              text-white
              transition
            "
          >
            Close
          </button>

        </div>

      </div>

    </div>

  );

}

export default RepoModal;