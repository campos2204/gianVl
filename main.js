const { app, BrowserWindow } = require('electron');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true, // Oculta la barra de menú
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile("index.html");
});
