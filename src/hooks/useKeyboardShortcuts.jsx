import { useEffect } from "react"

export function useKeyboardShortcuts(shortcuts) {
  useEffect(() => {
    const keyUpHandler = (e) => {
      if (shortcuts[e.key]) shortcuts[e.key]()
    }

    document.addEventListener("keyup", keyUpHandler)
    return () => document.removeEventListener("keyup", keyUpHandler)
  })
}
