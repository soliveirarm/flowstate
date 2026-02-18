import { useEffect, useState } from "react"

import { Header } from "./components/Header"
import { BottomBar } from "./components/BottomBar"
import { TimerControls } from "./components/TimerControls"
import { Timer } from "./components/Timer"
import { Radio } from "./components/Radio"
import { Settings } from "./components/Settings"
import { displayTime } from "./utils/display-time"

const breakIsOver = new Audio("./break-is-over.mp3")

export const App = () => {
  const [time, setTime] = useState(0)
  const [phase, setPhase] = useState("focus")
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false)
  const [isRadioOpen, setIsRadioOpen] = useState(false)
  const [selectedRadio, setSelectedRadio] = useState("Hip Hop")

  const startFocus = () => setIsTimerOn(true)
  const endFocus = () => {
    setIsTimerOn(false)
    const focusDuration = time
    setTime(Math.round(focusDuration / 5))
    setPhase("break")
  }

  const startBreak = () => setIsTimerOn(true)
  const endBreak = () => {
    setIsTimerOn(false)
    setPhase("focus")
    setTime(0)
  }

  const menuHandler = (menu, setMenu) => menu && setMenu(false)

  const toggleRadio = () => {
    menuHandler(isSettingsMenuOpen, setIsSettingsMenuOpen)
    setIsRadioOpen((prev) => !prev)
  }
  const toggleSettings = () => {
    menuHandler(isRadioOpen, setIsRadioOpen)
    setIsSettingsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    if (!isTimerOn) return

    let interval = null

    interval = setInterval(() => {
      setTime((prevTime) => {
        if (phase === "focus") return prevTime + 1
        if (phase === "break") {
          if (prevTime <= 0) {
            breakIsOver.play()
            setIsTimerOn(false)
            setPhase("focus")
            return 0
          }
          return prevTime - 1
        }

        return prevTime
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isTimerOn, phase])

  useEffect(() => {
    if (time == 0) document.title = "flowstate"
    else {
      const { h, m, s } = displayTime(time)
      document.title = `${h}:${m}:${s} - flowstate`
    }
  })

  return (
    <>
      <Header />

      <main className="grow self-center flex flex-col items-center justify-center gap-8">
        <h2 className="capitalize text-5xl font-light">{phase}</h2>
        <Timer time={time} />
        <TimerControls
          phase={phase}
          isTimerOn={isTimerOn}
          startFocus={startFocus}
          endFocus={endFocus}
          startBreak={startBreak}
          endBreak={endBreak}
        />
      </main>

      {isRadioOpen && (
        <Radio
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
        />
      )}
      {isSettingsMenuOpen && <Settings />}
      <BottomBar toggleRadio={toggleRadio} toggleSettings={toggleSettings} />
    </>
  )
}
