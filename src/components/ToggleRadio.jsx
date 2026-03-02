import { BoomBox } from "lucide-react"

export const ToggleRadio = ({ onClick }) => (
  <button onClick={onClick} className="text-violet-300 size-8">
    <BoomBox />
  </button>
)
