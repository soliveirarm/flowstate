export const Toggle = ({ name, checked }) => (
  <input
    value={checked}
    type="checkbox"
    name={name}
    id={name}
    className="appearance-none bg-slate-950 w-16 h-8 p-1 rounded-full relative before:content[''] before:absolute before:size-6 before:bg-violet-400 before:rounded-full before:inset-shadow-sm before:inset-shadow-black/50 checked:before:left-8.75 transition-all cursor-pointer"
  />
)
