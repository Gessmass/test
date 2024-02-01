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
  
  mainWindow.webContents.on('select-bluetooth-device', (event, deviceList, callback) => {
    event.preventDefault()
    selectBluetoothCallback = callback
    const result = deviceList.find((device) => {
      return device.deviceName === 'test'
    })
    if (result) {
      callback(result.deviceId)
    } else {
    
    }
  })
  ipcMain.on('cancel-bluetooth-request', (event) => {
    selectBluetoothCallback('')
  })
  
  ipcMain.on('bluetooth-pairing-response', (event, response) => {
    bluetoothPinCallback(response)
  })
  
  mainWindow.webContents.session.setBluetoothPairingHandler((details, callback) => {
    bluetoothPinCallback = callback
    mainWindow.webContents.send('bluetooth-pairing-request', details)
  })
  
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
