const {app, BrowserWindow} = require('electron')
const path = require('path');
const url = require('url');

require('dotenv').config({path: path.join(__dirname, '.env')});

let win = null;

app.on('ready', function () {
  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600, frame: false});
  win.webContents.openDevTools();
  // Specify entry point
  if (process.env.PACKAGE){
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL(process.env.HOST);
    //win.webContents.openDevTools();
  }

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
