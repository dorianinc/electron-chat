const path = require("path");
const { app, BrowserWindow, ipcMain, Notification } = require("electron/main");
const isDev = !app.isPackaged;
const { pedro } = require('./api/test.js');

// basic electron code //
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      worldSafeExecuteJavaScript: true,
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadFile("index.html");
  isDev && win.webContents.openDevTools();
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(() => {
  // const notification = new Notification({
  //   title: "Hello world",
  //   body: "My test message",
  // });
  createWindow();
  // notification.show();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// IPC communication //
ipcMain.on('pedro', (e, message) => {
  pedro(message)
})

ipcMain.on("app-quit", () => {
  app.quit()
})
