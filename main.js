// for business logic
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow


let mainWindow

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL("file://"+__dirname+"/index.html");

    mainWindow.on('closed', function(){
        mainWindow = null;
    });
});