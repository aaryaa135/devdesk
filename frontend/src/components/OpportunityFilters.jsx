function OpportunityFilters({

  search,
  setSearch

}) {

  return (

    <div className="mb-8">

      <input

        type="text"

        placeholder="Search opportunities..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        className="
          w-full
          bg-slate-900
          text-white
          p-4
          rounded-xl
          border
          border-slate-700
          focus:outline-none
          focus:border-cyan-400
        "

      />

    </div>

  );

}

export default OpportunityFilters;