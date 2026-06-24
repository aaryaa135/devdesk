function RepoModal({ repo, onClose }) {

  if (!repo) return null;

  return (

    <div
      className="
        fixed inset-0
        bg-black/70
        flex items-center justify-center
        z-50
      "
    >

      <div
        className="
          bg-slate-900
          p-6
          rounded-2xl
          w-[90%]
          max-w-xl
        "
      >

        <h2 className="text-2xl font-bold text-cyan-400">
          {repo.name}
        </h2>

        <p className="text-slate-300 mt-3">
          {repo.description || "No description"}
        </p>

        <div className="mt-4 space-y-2">

          <p className="text-white">
            Language: {repo.language || "Unknown"}
          </p>

          <p className="text-yellow-400">
            ⭐ {repo.stars}
          </p>

          <p className="text-cyan-400">
            🍴 {repo.forks}
          </p>

          <p className="text-slate-300">
            {repo.private ? "Private" : "Public"}
          </p>

        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block
            mt-5
            bg-cyan-500
            text-black
            px-4
            py-2
            rounded-lg
            font-semibold
          "
        >
          Open on GitHub
        </a>

        <button
          onClick={onClose}
          className="
            ml-4
            bg-red-500
            px-4
            py-2
            rounded-lg
            text-white
          "
        >
          Close
        </button>

      </div>

    </div>

  );

}

export default RepoModal;