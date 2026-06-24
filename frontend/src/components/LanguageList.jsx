function LanguageList({ languages }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        Languages
      </h2>

      {
        Object.entries(languages).map(
          ([name, count]) => (

            <div
              key={name}
              className="flex justify-between border-b border-slate-700 py-2 text-white"
            >
              <span>{name}</span>
              <span>{count}</span>
            </div>

          )
        )
      }

    </div>
  );
}

export default LanguageList;