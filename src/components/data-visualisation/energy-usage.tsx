import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { DATA_VIZ_COLORS } from "@/constants";

interface EnergyUsage {
  name: string;
  energy: number;
}

export const EnergyUsage = ({ data }: { data: EnergyUsage[] }) => (
  <div className="flex-1">
    <h3 className="text-lg font-semibold mb-2">Energy Usage by rocket type</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="energy" fill="#8884d8">
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={DATA_VIZ_COLORS[index % DATA_VIZ_COLORS.length]}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);
