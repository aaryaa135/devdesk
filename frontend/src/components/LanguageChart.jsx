import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

function LanguageChart({ languages }) {

  const data = Object.entries(languages).map(
    ([name, value]) => ({
      name,
      value
    })
  );

  const COLORS = [
    "#06b6d4",
    "#8b5cf6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#3b82f6"
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        Language Distribution
      </h2>

      <div className="h-80">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >

              {
                data.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index % COLORS.length
                      ]
                    }
                  />

                ))
              }

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );

}

export default LanguageChart;