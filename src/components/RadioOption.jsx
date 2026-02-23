export const RadioOption = ({ isSelected, name, onClick }) => (
  <button
    className={`radio-btn border-2 font-semibold rounded-full px-4 py-1 grow  ${isSelected ? "hover:opacity-90 border-gray-900 bg-violet-300 text-gray-950 inset-shadow-sm inset-shadow-violet-600/50" : "bg-gray-800 hover:bg-gray-700 border-gray-600 text-violet-100"}`}
    onClick={onClick}
  >
    {name}
  </button>
)
