interface LimitSliderProps {
  limit: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export const LimitSlider = ({
  limit,
  min = 1,
  max = 20,
  onChange,
}: LimitSliderProps) => (
  <div className="flex items-center gap-4">
    <label
      htmlFor="limit"
      className="text-sm font-medium text-muted-foreground"
    >
      Launches to show: {limit}
    </label>
    <input
      id="limit"
      type="range"
      min={min}
      max={max}
      value={limit}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full"
    />
  </div>
);
