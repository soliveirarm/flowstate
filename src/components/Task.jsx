export function Task({ task, setTask, isTimerOn }) {
  return (
    <textarea
      className="text-gray-800 dark:text-violet-100 text-2xl font-light resize-none field-sizing-content whitespace-pre-wrap wrap-break-word placeholder:text-gray-400 focus:placeholder:text-transparent text-center w-full max-w-md focus:outline-none"
      type="text"
      placeholder="What are you working on?"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      readOnly={isTimerOn}
    ></textarea>
  )
}
