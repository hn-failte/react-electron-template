const path = require('path')
const { BrowserWindow } = require('electron')

module.exports = function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, '../preload.js')
      }
    })

    // and load the index.html of the app.
    // mainWindow.loadFile('index.html')
    mainWindow.loadFile(path.join(__dirname, '../dist/web/index.html'))

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
  }
