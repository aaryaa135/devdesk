import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./Heatmap.css";

function ContributionHeatmap() {

  const values = [];

  for (let i = 0; i < 120; i++) {

    values.push({
      date: new Date(
        Date.now() - i * 86400000
      ),
      count: Math.floor(Math.random() * 5)
    });

  }

  return (

    <div className="bg-slate-900 rounded-2xl p-8 mt-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Contribution Heatmap
      </h2>

      <div className="overflow-x-auto">

        <CalendarHeatmap
            startDate={
                new Date(
                    Date.now() - 120 * 86400000
                )
            }
            endDate={new Date()}
            values={values}
            classForValue={(value) => {

                if (!value)
                    return "color-empty";

                return `color-scale-${value.count}`;

                }}
            />

        </div>

        <div className="flex items-center justify-end gap-2 mt-6 text-sm text-slate-400">

            <span>Less</span>

                <div className="w-4 h-4 bg-slate-800 rounded-sm"></div>
                <div className="w-4 h-4 bg-cyan-900 rounded-sm"></div>
                <div className="w-4 h-4 bg-cyan-700 rounded-sm"></div>
                <div className="w-4 h-4 bg-cyan-500 rounded-sm"></div>
                <div className="w-4 h-4 bg-cyan-300 rounded-sm"></div>

            <span>More</span>

        </div>
    </div>

  );

}

export default ContributionHeatmap;