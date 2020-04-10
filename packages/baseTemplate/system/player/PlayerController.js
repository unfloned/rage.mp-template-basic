"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerController = /** @class */ (function () {
    function PlayerController(core) {
        this.core = core;
    }
    PlayerController.prototype.onPlayerConnected = function (playerMp) {
        // what happens if player is connected...
        // was defined by eventhandler
        playerMp.outputChatBox("Hey " + playerMp.name + " and welcome to Base Template.");
        playerMp.outputChatBox("you must /login or /register for authenticate your identity.");
    };
    PlayerController.prototype.onPlayerComment = function (playerMp, command) {
        if (command !== undefined) {
            var args = command.split(/[ ]+/);
            if (args[0] !== undefined) {
                switch (args[0]) {
                    case "help":
                        playerMp.outputChatBox("/login [username] [password]");
                        break;
                    case "login":
                        var username = args[1];
                        var password = args[2];
                        if (username == undefined && password == undefined) {
                            return this.sendCommandError(playerMp, "You must fill your arguments", "login [username] [password]");
                        }
                        break;
                    default:
                        playerMp.outputChatBox("your command " + args[0] + " not exists. Try another one.");
                        break;
                }
            }
        }
    };
    PlayerController.prototype.sendCommandError = function (playerMp, msg, correctWay) {
        playerMp.outputChatBox("Your command you trying is not working:");
        playerMp.outputChatBox(msg);
        playerMp.outputChatBox("you can only use this command with: ");
        playerMp.outputChatBox(correctWay);
    };
    return PlayerController;
}());
exports.PlayerController = PlayerController;
//# sourceMappingURL=PlayerController.js.map