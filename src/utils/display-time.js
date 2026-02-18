export function displayTime(time) {
  const h = String(Math.floor(time / 3600)).padStart(2, "0")
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, "0")
  const s = String(time % 60).padStart(2, "0")

  return { h, m, s }
}
