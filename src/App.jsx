import { useState } from "react"

import { Header } from "./components/Header"
import { BottomBar } from "./components/BottomBar"
import { TimerControls } from "./components/TimerControls"
import { Timer } from "./components/Timer"
import { Radio } from "./components/Radio"
import { Settings } from "./components/Settings"

export const App = () => {
  const [phase, setPhase] = useState("focus")
  const [isRunning, setIsRunning] = useState(false)
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false)
  const [isRadioOpen, setIsRadioOpen] = useState(false)
  const [selectedRadio, setSelectedRadio] = useState("Hip Hop")

  const startFocus = () => setIsRunning(true)
  const endFocus = () => {
    setIsRunning(false)
    setPhase("break")
  }
  const startBreak = () => {
    setIsRunning(true)
  }
  const endBreak = () => {
    setIsRunning(false)
    setPhase("focus")
  }
  const toggleRadio = () => setIsRadioOpen((curr) => !curr)
  const toggleSettings = () => setIsSettingsMenuOpen((curr) => !curr)

  return (
    <>
      <Header />

      <main className="grow self-center flex flex-col items-center justify-center gap-8">
        <h2 className="capitalize text-5xl font-light">{phase}</h2>
        <Timer />
        <TimerControls
          phase={phase}
          isRunning={isRunning}
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
