import { Play, FastForward, Square } from "lucide-react"
import { Button } from "./Button"

export const TimerControls = ({
  phase,
  isTimerOn,
  startTimer,
  endFocus,
  endBreak,
}) => {
  if (isTimerOn) {
    const action = phase === "focus" ? endFocus : endBreak
    return (
      <Button onClick={action} Icon={Square} title={`End ${phase} Session`} />
    )
  }

  if (phase === "focus") {
    return (
      <Button onClick={startTimer} Icon={Play} title="Start focus session" />
    )
  }

  return (
    <div className="flex gap-8">
      <Button onClick={startTimer} Icon={Play} title="Start break" />
      <Button onClick={endBreak} Icon={FastForward} title="Skip break" />
    </div>
  )
}
