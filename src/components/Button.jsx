export const Button = ({ className = "size-10", onClick, Icon, title }) => (
  <button onClick={onClick} title={title}>
    {Icon && <Icon className={`${className} text-violet-300`} />}
  </button>
)
