import { Play, FastForward, Square } from "lucide-react"
import { Button } from "./Button"

export const TimerControls = ({
  phase,
  isRunning,
  startFocus,
  endFocus,
  startBreak,
  endBreak,
}) => {
  if (phase === "focus") {
    return !isRunning ? (
      <Button onClick={startFocus} Icon={Play} title={"Start Focus Session"} />
    ) : (
      <Button onClick={endFocus} Icon={Square} title={"End Focus Session"} />
    )
  } else if (phase === "break") {
    return !isRunning ? (
      <div className="flex gap-8">
        <Button onClick={startBreak} Icon={Play} title={"Start Break"} />
        <Button onClick={endBreak} Icon={FastForward} title={"Skip Break"} />
      </div>
    ) : (
      <Button onClick={endBreak} Icon={Square} />
    )
  }
}
