import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { DATA_VIZ_COLORS } from "@/constants";

interface RocketUsageProps {
  rocketUsage: {
    name: string;
    count: number;
  }[];
}

export const RocketUsage = ({ rocketUsage }: RocketUsageProps) => {
  return (
    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-2">Rocket Usage</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={rocketUsage}
            dataKey="count"
            nameKey="name"
            outerRadius={100}
            fill="#82ca9d"
            label
          >
            {rocketUsage.map((_, index) => (
              <Cell
                key={index}
                fill={DATA_VIZ_COLORS[index % DATA_VIZ_COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
