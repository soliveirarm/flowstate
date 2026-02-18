import { displayTime } from "../utils/display-time"

export const Timer = ({ time }) => {
  const { h, m, s } = displayTime(time)

  return (
    <div className="text-5xl font-mono font-light flex gap-4">
      {h === 0 && (
        <div>
          <span className="text-violet-100">{h}</span>
          <Measure value="h" />
        </div>
      )}
      <div>
        <span className="text-violet-100">{m}</span>
        <Measure value="m" />
      </div>
      <div>
        <span className="text-violet-100">{s}</span>
        <Measure value="s" />
      </div>
    </div>
  )
}

const Measure = ({ value }) => (
  <span className="font-thin text-gray-400">{value}</span>
)
