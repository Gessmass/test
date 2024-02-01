const {app, BrowserWindow, ipcMain} = require('electron')
const path = require("path")


const isDev = true

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableBlinkFeatures: "WebBluetooth",
    }
  });
  
  
  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, 'dist', 'index.html')}`
  ).catch((error) => {
    console.error('Erreur lors du chargement de l\'URL :', error);
  })
  
  mainWindow.webContents.openDevTools()
  
}


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
