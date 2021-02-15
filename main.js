const { app, BrowserWindow, Menu, Tray } = require('electron')
app.dock.hide()
let iconpath = "logo.png"

function createWindow () {
    var win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true
    }
    })

    win.loadFile('index.html')

    var tray = new Tray(iconpath)
    const contextMenu = Menu.buildFromTemplate([
    {
        label: 'Show Stats', click: function () {
            win.show()
        }
    },
    {
        label: 'Quit', click: function () {
            app.isQuiting = true
            app.quit()
        }
    }
    ])
    tray.setToolTip('This is my application.')
    tray.setContextMenu(contextMenu)

    win.on('close', function (event) {
        event.preventDefault()
        win.hide()
    })

    win.on('minimize', function (event) {
        event.preventDefault()
        win.hide()
    })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
