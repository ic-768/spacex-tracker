import { EnergyPanel } from "./components/energy-panel";
import { LaunchList } from "./components/launch-list/launch-list";
import { useLaunches } from "./hooks/useLaunches";

function App() {
  const { launches, loading, error, isSelected, onSelect, totalEnergy } =
    useLaunches();

  console.log("total", totalEnergy);

  return (
    <div className="p-8 grid grid-cols-5 gap-4">
      <div className="col-span-4">
        <LaunchList
          launches={launches}
          loading={loading}
          error={error}
          isSelected={isSelected}
          onSelect={onSelect}
        />
      </div>
      <div className="col-span-1">
        <EnergyPanel totalEnergy={totalEnergy} />
      </div>
    </div>
  );
}

export default App;
