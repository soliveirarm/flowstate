export const Timer = () => (
  <div className="text-5xl font-mono font-light flex gap-4">
    <div>
      <span className="text-violet-100">00</span>
      <Measure value="h" />
    </div>
    <div>
      <span className="text-violet-100">00</span>
      <Measure value="m" />
    </div>
    <div>
      <span className="text-violet-100">00</span>
      <Measure value="s" />
    </div>
  </div>
)

const Measure = ({ value }) => (
  <span className="font-thin text-gray-400">{value}</span>
)
