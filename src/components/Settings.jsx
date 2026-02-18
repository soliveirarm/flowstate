import { SettingsOption } from "./SettingsOption"
import { BellOff, Divide, VolumeOff } from "lucide-react"
import { Toggle } from "./Toggle"

export const Settings = () => (
  <div className="flex flex-col gap-4 bg-gray-900 border-2 border-gray-700 rounded-lg p-4 absolute bottom-18 right-8 max-w-fit">
    <h3 className="text-xl text-violet-100 font-bold">Settings</h3>
    <div className="flex flex-col gap-2 mt-2">
      <span className="flex items-center justify-between gap-8">
        <SettingsOption title="Notifications" Icon={BellOff} />
        <Toggle name="notifications" />
      </span>
      <span className="flex items-center justify-between gap-8">
        <SettingsOption title="Sound" Icon={VolumeOff} />
        <Toggle name="sound" />
      </span>
      <span className="flex items-center justify-between gap-8">
        <SettingsOption title="Break Ratio" Icon={Divide} />
        <input
          type="number"
          name="break-ratio"
          id="break-ratio"
          className="bg-slate-950 w-16 h-8 px-3 rounded-full"
          value={5}
        />
      </span>
    </div>
  </div>
)
