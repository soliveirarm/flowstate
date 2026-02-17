export const SettingsOption = ({ title, Icon }) => (
  <span className="flex items-center gap-2.5">
    <Icon className="text-violet-300" />
    <p className="text-xl text-gray-400">{title}</p>
  </span>
)
