function OpportunityCard({ opportunity }) {

  return (

    <div
      className="
        bg-slate-900
        rounded-2xl
        p-6
        border
        border-slate-800
        hover:border-cyan-400
        transition
        duration-300
      "
    >

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-2xl font-bold text-white">

            {opportunity.title}

          </h2>

          <p className="text-cyan-400 mt-1">

            {opportunity.company}

          </p>

        </div>

        <span
          className="
            bg-cyan-500/20
            text-cyan-300
            px-3
            py-1
            rounded-full
            text-sm
          "
        >

          {opportunity.category}

        </span>

      </div>

      <div className="mt-5 space-y-2 text-slate-300">

        <p>

          📍 {opportunity.location}

        </p>

        {

          opportunity.department && (

            <p>

              🏢 {opportunity.department}

            </p>

          )

        }

        <p>

          <span
            className="
                inline-block
                bg-emerald-500/20
                text-emerald-400
                px-3
                py-1
                rounded-full
                text-sm
            "
            >

            {opportunity.source}

            </span>

        </p>

        <p>

          {opportunity.remote
            ? "🟢 Remote"
            : "🏢 On-site / Hybrid"}

        </p>

      </div>

      <a

        href={opportunity.apply_url}

        target="_blank"

        rel="noreferrer"

        className="
          mt-6
          inline-block
          bg-cyan-500
          hover:bg-cyan-400
          text-black
          font-semibold
          px-5
          py-3
          rounded-xl
          transition
        "

      >

        Apply →

      </a>

    </div>

  );

}

export default OpportunityCard;