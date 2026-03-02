import { Settings } from "lucide-react"

export const ToggleSettings = ({ onClick }) => (
  <button onClick={onClick} className="text-violet-300 size-8">
    <Settings />
  </button>
)
