export const Button = ({ size = 10, onClick, Icon, title }) => (
  <button onClick={onClick} title={title}>
    <Icon className={`size-${size} text-violet-300`} />
  </button>
)
