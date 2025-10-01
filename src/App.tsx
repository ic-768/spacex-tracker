import { LaunchList } from "./components/launch-list/launch-list";
import { useLaunches } from "./hooks/useLaunches";

function App() {
  const { launches, loading, error, isSelected, onSelect } = useLaunches();

  return (
    <div className="p-8">
      <LaunchList
        launches={launches}
        loading={loading}
        error={error}
        isSelected={isSelected}
        onSelect={onSelect}
      />
    </div>
  );
}

export default App;
