import { useEffect } from "react"

export function useChangeVolume(isRadioOpen, setVolume, player, volume) {
  useEffect(() => {
    const keyDownHandler = (e) => {
      if (!isRadioOpen) return

      if (e.key == "ArrowUp") {
        if (volume < 100) setVolume((prev) => prev + 5)
      } else if (e.key == "ArrowDown") {
        if (volume > 0) setVolume((prev) => prev - 5)
      }
      player.setVolume(volume)
    }

    document.addEventListener("keyup", keyDownHandler)
    return () => document.removeEventListener("keyup", keyDownHandler)
  })
}
