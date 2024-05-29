const { ipcRenderer, contextBridge } = require("electron");

// contextBridge.exposeInMainWorld("e_notification", {
//   sendNotification(message) {
//     ipcRenderer.send("pedro", message);
//   },
// });

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send("alert-message", message);
    },
  },
  productApi: {},
  matchApi: {},
  settingApi: {},
});
