const { Notification } = require("electron/main");

const pedro = (message) => {
    new Notification({title: "Notification", body: message}).show()
}


module.exports = {
    pedro
}