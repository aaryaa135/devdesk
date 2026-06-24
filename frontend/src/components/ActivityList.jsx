function ActivityList({ activities }) {

  return (

    <div className="bg-slate-900 rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        Recent Activity
      </h2>

      {
        activities.map((activity, index) => (

          <div
            key={index}
            className="border-b border-slate-700 py-3"
          >

            <p className="text-white font-medium">
              {activity.type}
            </p>

            <p className="text-slate-400">
              {activity.repo}
            </p>

            <p className="text-slate-500 text-sm">
              {new Date(
                activity.created_at
              ).toLocaleString()}
            </p>

          </div>

        ))
      }

    </div>

  );

}

export default ActivityList;