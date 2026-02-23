export const Toggle = ({ name, isChecked, setIsChecked, disabled = false }) => (
  <input
    checked={isChecked}
    type="checkbox"
    name={name}
    id={name}
    className={
      "appearance-none bg-slate-950 w-16 h-8 p-1 rounded-full relative before:content[''] before:absolute before:size-6 before:bg-violet-300 before:rounded-full before:inset-shadow-sm before:inset-shadow-black/50 checked:before:left-8.75 transition-all cursor-pointer disabled:before:bg-gray-400"
    }
    onChange={() => setIsChecked(!isChecked)}
    disabled={disabled}
  />
)
