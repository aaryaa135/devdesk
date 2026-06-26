function Skeleton() {

  return (

    <div className="min-h-screen bg-slate-950 p-8 animate-pulse">

      <div className="max-w-5xl mx-auto">

        <div className="h-12 w-72 bg-slate-800 rounded mb-10 mx-auto"></div>

        <div className="bg-slate-900 rounded-2xl p-8">

          <div className="w-32 h-32 bg-slate-800 rounded-full mx-auto"></div>

          <div className="h-8 w-64 bg-slate-800 rounded mx-auto mt-6"></div>

          <div className="h-5 w-40 bg-slate-800 rounded mx-auto mt-4"></div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

          {
            Array.from({ length: 8 }).map((_, i) => (

              <div
                key={i}
                className="h-32 bg-slate-900 rounded-xl"
              />

            ))
          }

        </div>

        <div className="bg-slate-900 rounded-2xl h-72 mt-8"></div>

        <div className="bg-slate-900 rounded-2xl h-96 mt-8"></div>

      </div>

    </div>

  );

}

export default Skeleton;