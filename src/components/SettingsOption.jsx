export const SettingsOption = ({ title, Icon }) => (
  <span className="flex items-center gap-2.5 select-none">
    {Icon && <Icon className="text-violet-400 dark:text-violet-300" />}
    <p className="text-lg text-gray-600 dark:text-gray-400">{title}</p>
  </span>
)
