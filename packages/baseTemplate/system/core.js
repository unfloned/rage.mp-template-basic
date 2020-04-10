"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerController_1 = require("./player/PlayerController");
var eventHandler_1 = require("./eventHandler");
var Core = /** @class */ (function () {
    //Vehicle
    function Core(database) {
        this.Database = database;
        this.eventHandle = new eventHandler_1.EventHandler(this);
        this.playerController = new PlayerController_1.PlayerController(this);
    }
    return Core;
}());
exports.Core = Core;
//# sourceMappingURL=core.js.map