import { SettingsOption } from "./SettingsOption"
import { BellOff, BellRing, Divide, Volume2, VolumeOff } from "lucide-react"
import { Toggle } from "./Toggle"

export const Settings = ({
  breakRatio,
  setBreakRatio,
  isSoundOn,
  setIsSoundOn,
  areNotificationsOn,
  handleNotifications,
  notificationsDenied,
}) => (
  <div className="flex flex-col gap-4 bg-gray-900 border-2 border-gray-700 rounded-lg p-4 absolute bottom-18 right-8 max-w-fit">
    <h3 className="text-xl text-violet-100 font-bold">Settings</h3>
    <div className="flex flex-col gap-2 mt-2">
      <Container>
        <SettingsOption
          title="Notifications"
          Icon={areNotificationsOn ? BellRing : BellOff}
        />
        <Toggle
          name="notifications"
          isChecked={areNotificationsOn}
          setIsChecked={handleNotifications}
          disabled={notificationsDenied}
        />
      </Container>

      <Container>
        <SettingsOption title="Sound" Icon={isSoundOn ? Volume2 : VolumeOff} />
        <Toggle
          name="sound"
          isChecked={isSoundOn}
          setIsChecked={setIsSoundOn}
        />
      </Container>

      <Container>
        <SettingsOption title="Break Ratio" Icon={Divide} />
        <input
          type="number"
          name="break-ratio"
          id="break-ratio"
          className="bg-slate-950 w-16 h-8 px-3 rounded-full"
          value={breakRatio}
          onChange={(e) => setBreakRatio(+e.target.value)}
        />
      </Container>
    </div>
  </div>
)

const Container = ({ children }) => (
  <span className="flex items-center justify-between gap-8">{children}</span>
)
