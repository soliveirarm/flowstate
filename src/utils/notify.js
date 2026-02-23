export const notify = (userPreference) => {
  if (Notification.permission === "granted" && userPreference) {
    new Notification("Break's over!", {
      body: "Time to get back to work.",
      icon: "./favicon.svg",
    })
  }
}
