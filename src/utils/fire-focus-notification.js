export const fireFocusNotification = () => {
  if (Notification.permission === "granted") {
    new Notification("Break's over!", {
      body: "Time to get back to work.",
      icon: "./favicon.svg",
    })
  }
}
