interface EnergyPanelProps {
  totalEnergy: number;
}

export const EnergyPanel = ({ totalEnergy }: EnergyPanelProps) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-64">
      <h3 className="text-lg font-semibold mb-2">Total Energy Expenditure</h3>
      <p className="text-2xl font-bold">{totalEnergy} GJ</p>
    </div>
  );
};
