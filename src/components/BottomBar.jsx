import { Button } from "./Button"
import { Disc3, Settings } from "lucide-react"

export const BottomBar = ({ toggleRadio, toggleSettings }) => (
  <footer className="px-8 py-6 flex items-center justify-between">
    <Button Icon={Disc3} size="7" onClick={toggleRadio} />
    <Button Icon={Settings} size="7" onClick={toggleSettings} />
  </footer>
)
