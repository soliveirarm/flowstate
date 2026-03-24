import { ClockPlus } from "lucide-react"

const Accent = ({ text }) => (
  <div className="text-violet-400 dark:text-violet-300">{text}</div>
)

export const Header = () => (
  <header className="flex items-center gap-2 px-8 py-4">
    <ClockPlus className="size-7 text-violet-400" />
    <div className="dark:text-gray-100 text-3xl font-light flex">
      <Accent text="f" />
      low
      <Accent text="s" />
      tate
    </div>
  </header>
)
