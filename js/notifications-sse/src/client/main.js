import "./style.css";
import { createEventSource } from "./utils";

const notificationsContainer = document.querySelector(".notifications");
const [connectBtn, disconnectBtn, dropBtn] = document.querySelectorAll(
  ".actions-container > *"
);

const updateNotifications = (data) =>
  (notificationsContainer.textContent = data);

const source = createEventSource("/sse/events");

connectBtn.addEventListener("click", (_) => {
  source.connect();
  updateNotifications("Connecting...");

  source.listenFor("notifications", (e) => {
    const data = JSON.parse(e.data);
    updateNotifications(data.content);
  });
});

disconnectBtn.addEventListener("click", (_) => {
  source.disconnect();
  updateNotifications("Disconnected");
});

dropBtn.addEventListener("click", async (_) => {
  try {
    const res = await fetch("/api/drop", { method: "put" });
    const resText = await res.text();
    console.log(resText);

    if (res.status === 404) {
      updateNotifications(resText);
      return;
    }
    updateNotifications("Dropped. Reconnecting...");
  } catch {
    updateNotifications("Something went wrong...");
  }
});

updateNotifications("Disconnected");
