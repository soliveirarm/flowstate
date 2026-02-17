export const RadioOption = ({ isSelected, radioName, onClick }) => (
  <button
    className={`radio-btn border-2 border-violet-300 font-semibold w-48 h-28 rounded-lg grow  ${isSelected ? "hover:opacity-90 border-none bg-violet-300 text-gray-950 inset-shadow-sm inset-shadow-violet-600/50" : "bg-gray-800 hover:bg-gray-700 text-violet-100"}`}
    onClick={onClick}
  >
    {radioName}
  </button>
)
