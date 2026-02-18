import { displayTime } from "../utils/display-time"

const TimeBlock = ({ value, measure }) => (
  <div>
    <span className="text-violet-100">{value}</span>
    <span className="font-thin text-gray-400">{measure}</span>
  </div>
)

export const Timer = ({ time }) => {
  const { h, m, s } = displayTime(time)

  return (
    <div className="text-5xl font-mono font-light flex gap-4">
      {h === 0 && <TimeBlock value={h} measure="h" />}
      <TimeBlock value={m} measure="m" />
      <TimeBlock value={s} measure="s" />
    </div>
  )
}
