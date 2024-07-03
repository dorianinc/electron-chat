const path = require("path");
const { app, BrowserWindow, Menu, Tray } = require("electron");
const windowStateKeeper = require("electron-window-state");
const dockIcon = path.join(__dirname, "assets", "images", "react_app_logo.png");
const trayIcon = path.join(__dirname, "assets", "images", "react_icon.png");
const isDev = !app.isPackaged;

let windowState;
let mainWindow;
let splashWindow;

const createWindow = () => {
  windowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800,
  });

  mainWindow = new BrowserWindow({
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height,
    backgroundColor: "#f2f2f2",
    show: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
    alwaysOnTop: true,
  });

  windowState.manage(mainWindow);
  mainWindow.loadFile("./public/index.html");
  return mainWindow;
};

const createSplashWindow = () => {
  windowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800,
  });

  splashWindow = new BrowserWindow({
    x: windowState.x,
    y: windowState.y,
    width: 600,
    height: 400,
    backgroundColor: "#6e707e",
    frame: false,
    transparent: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  splashWindow.loadFile("./public/splash.html");
  return splashWindow;
};

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

if (process.platform === "darwin") {
  app.dock.setIcon(dockIcon);
}

let tray = null;
app.whenReady().then(() => {
  const template = require("./utils/Menu").createTemplate();
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  tray = new Tray(trayIcon);
  tray.setContextMenu(menu);

  const splash = createSplashWindow();
  const mainApp = createWindow();

  mainApp.once("ready-to-show", () => {
    setTimeout(() => {
      splash.destroy();
      mainApp.show();
    }, 1000);
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
