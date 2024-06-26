const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = !app.isPackaged;
const windowStateKeeper = require("electron-window-state");

// basic electron code //
function createWindow() {
  // Initialize the window state
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800,
  });


  const mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    webPreferences: {
      // worldSafeExecuteJavaScript: true,
      // Disable 'contextIsolation' to allow 'nodeIntegration'
      // 'contextIsolation' defaults to "true" as from Electron v12
      contextIsolation: false,
      nodeIntegration: true
    },
    alwaysOnTop: true,
  });

  // Manage the window state
  mainWindowState.manage(mainWindow);

  mainWindow.loadFile("./public/index.html");
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(() => {
  createWindow();

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

// // IPC communication //
// ipcMain.on("alert-message", (e, message) => {
//   displayNotification(message);
// });