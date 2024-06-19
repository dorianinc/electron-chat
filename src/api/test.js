const { Notification } = require("electron/main");

const displayNotification = (message) => {
    new Notification({title: "Notification", body: message}).show()
}


module.exports = {
    displayNotification
}