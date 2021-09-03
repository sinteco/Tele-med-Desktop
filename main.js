const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });

    mainWindow.setTitle('Tele Med Ethiopia');
    mainWindow.loadURL('http://3.144.37.11/');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});