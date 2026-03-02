import { useEffect, useRef, useState } from "react"
import { useLocalStorage } from "@uidotdev/usehooks"
import { displayTime } from "./utils/display-time"
import { notify } from "./utils/notify"

import { Header } from "./components/Header"
import { BottomBar } from "./components/BottomBar"
import { TimerControls } from "./components/TimerControls"
import { Timer } from "./components/Timer"
import { Radio } from "./components/Radio"
import { Settings } from "./components/Settings"

const breakIsOver = new Audio("./break-is-over.mp3")

export const App = () => {
  const startTimeRef = useRef(null)
  const initialTimeRef = useRef(0)
  const [time, setTime] = useState(0)
  const [phase, setPhase] = useState("focus")
  const [isTimerOn, setIsTimerOn] = useState(false)

  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false)

  const [isRadioOpen, setIsRadioOpen] = useState(false)

  const [breakRatio, setBreakRatio] = useLocalStorage("FS_BREAK_RATIO", 5)
  const [isSoundOn, setIsSoundOn] = useLocalStorage("FS_IS_SOUND_ON", false)
  const [areNotificationsOn, setAreNotificationsOn] = useLocalStorage(
    "FS_ARE_NOTIFICATIONS_ON",
    false,
  )

  const [notificationsDenied, setNotificationsDenied] = useState(
    Notification.permission === "denied",
  )

  const startTimer = () => {
    startTimeRef.current = performance.now()
    initialTimeRef.current = time
    setIsTimerOn(true)
  }

  const endFocus = () => {
    setIsTimerOn(false)
    const focusDuration = time
    setTime(Math.round(focusDuration / breakRatio))
    setPhase("break")
  }

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

  const handleNotifications = () => {
    if (Notification.permission === "default") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") setAreNotificationsOn(true)
      })
    } else if (Notification.permission === "granted") {
      setAreNotificationsOn((prev) => !prev)
    } else {
      setAreNotificationsOn(false)
      setNotificationsDenied(true)
    }
  }

  useEffect(() => {
    if (!isTimerOn) return

    let animationFrameId

    const update = () => {
      const now = performance.now()
      const elapsedSeconds = Math.floor((now - startTimeRef.current) / 1000)

      if (phase === "focus") setTime(initialTimeRef.current + elapsedSeconds)

      if (phase === "break") {
        const remaining = initialTimeRef.current - elapsedSeconds

        if (remaining <= 0) {
          if (isSoundOn) breakIsOver.play()
          notify(areNotificationsOn)

          setIsTimerOn(false)
          setPhase("focus")
          setTime(0)
          return
        }

        setTime(remaining)
      }

      animationFrameId = requestAnimationFrame(update)
    }

    animationFrameId = requestAnimationFrame(update)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isTimerOn, phase, isSoundOn, areNotificationsOn])

  useEffect(() => {
    if (!isTimerOn) {
      document.title = "flowstate"
      return
    }

    const { h, m } = displayTime(time)

    const timer = h === "00" ? `${m}m` : `${h}h${m}m`
    document.title = `${timer} - flowstate`
  }, [time, isTimerOn])

  return (
    <>
      <Header />

      <main className="grow self-center flex flex-col items-center justify-center gap-8">
        <h2 className="capitalize text-4xl font-light">{phase}</h2>
        <Timer time={time} />
        <TimerControls
          phase={phase}
          isTimerOn={isTimerOn}
          startTimer={startTimer}
          endFocus={endFocus}
          endBreak={endBreak}
        />
      </main>

      <Radio isOpen={isRadioOpen} />

      {isSettingsMenuOpen && (
        <Settings
          breakRatio={breakRatio}
          setBreakRatio={setBreakRatio}
          isSoundOn={isSoundOn}
          setIsSoundOn={setIsSoundOn}
          areNotificationsOn={areNotificationsOn}
          handleNotifications={handleNotifications}
          notificationsDenied={notificationsDenied}
        />
      )}

      <BottomBar toggleRadio={toggleRadio} toggleSettings={toggleSettings} />
    </>
  )
}
