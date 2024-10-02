import express from "express";
import ViteExpress from "vite-express";
import { createMsg, generateNotification } from "./utils.js";

const app = express();

// SSE route. Client connects to this to route to receive events
app.get("/sse/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Cache-Control", "no-cache");
  res.flushHeaders();

  const intervalId = setInterval(() => {
    const notification = generateNotification();
    const msg = createMsg(notification, notification.event, notification.id);
    res.write(msg);
  }, 1000);

  res.on("close", () => {
    clearInterval(intervalId);
    res.end();
  });
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
