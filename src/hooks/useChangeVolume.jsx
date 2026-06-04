import { useEffect } from "react"

export function useChangeVolume(isRadioOpen, setVolume, player, volume) {
  useEffect(() => {
    const keyDownHandler = (e) => {
      if (!isRadioOpen) return

      if (e.key == "ArrowUp" && volume < 100) {
        setVolume((prev) => prev + 5)
      } else if (e.key == "ArrowDown" && volume > 0) {
        setVolume((prev) => prev - 5)
      }

      player.setVolume(volume)
    }

    document.addEventListener("keydown", keyDownHandler)
    return () => document.removeEventListener("keydown", keyDownHandler)
  })
}
