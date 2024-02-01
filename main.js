const {app, BrowserWindow, ipcMain} = require('electron')
const path = require("path")


const isDev = false

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
  
  
  // mainWindow.loadURL(
  //   isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, 'dist', 'index.html')}`
  // );
  
  if (isDev) {
    mainWindow.loadURL('http://localhost:3000'); // Charge le serveur de développement
    mainWindow.webContents.openDevTools(); // Ouvre les outils de développement en mode développement
  } else {
    mainWindow.loadFile('dist/index.html'); // Charge le fichier HTML local en mode production
  }
  
  
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
