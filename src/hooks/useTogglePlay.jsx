import { useEffect } from "react"

export function useTogglePlay(isRadioOpen, togglePlay) {
  useEffect(() => {
    const keyUpHandler = (e) => {
      if (isRadioOpen && e.key == " ") togglePlay()
    }

    document.addEventListener("keyup", keyUpHandler)
    return () => document.removeEventListener("keyup", keyUpHandler)
  })
}
