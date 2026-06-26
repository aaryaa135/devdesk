function ErrorState({ onRetry }) {

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-2xl text-center">

        <h2 className="text-3xl font-bold text-red-400">
          ⚠ Unable to load dashboard
        </h2>

        <p className="text-slate-400 mt-4">
          Something went wrong while fetching GitHub data.
        </p>

        <button
          onClick={onRetry}
          className="
            mt-6
            bg-cyan-500
            hover:bg-cyan-400
            px-6
            py-3
            rounded-xl
            font-semibold
            text-black
          "
        >
          Retry
        </button>

      </div>

    </div>

  );

}

export default ErrorState;