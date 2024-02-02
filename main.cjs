const {app, BrowserWindow, ipcMain} = require('electron')
const path = require("path")


const isDev = true
const isMac = process.platform === 'darwin'

let selectBluetoothCallback
let bluetoothPinCallback

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      enableBlinkFeatures: "WebBluetooth",
      // preload: path.join(__dirname, "preload.cjs")
    }
  });
  
  
  mainWindow.webContents.openDevTools()
  
  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, 'dist', 'index.html')}`
  ).catch((error) => {
    console.error('Erreur lors du chargement de l\'URL :', error);
  })
}


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});


app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
