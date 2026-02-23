export const Button = ({
  className = "size-10",
  onClick,
  Icon,
  title,
  disabled = false,
}) => (
  <button onClick={onClick} title={title} disabled={disabled}>
    {Icon && <Icon className={`${className} text-violet-300`} />}
  </button>
)
