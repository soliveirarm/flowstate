export const RadioOption = ({ isSelected, name, onClick }) => (
  <button
    className={`station-btn ${isSelected ? "-selected" : ""}`}
    onClick={onClick}
  >
    {name}
  </button>
)
