"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventHandler = /** @class */ (function () {
    function EventHandler(core) {
        this.core = core;
        mp.events.add("playerReady", this.core.playerController.onPlayerConnected);
    }
    return EventHandler;
}());
exports.EventHandler = EventHandler;
//# sourceMappingURL=eventHandler.js.map