"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is a simple event handler.
 * With this class you must/should put alle RageMP Events and call them, where they must going.
 * like playerReady will be called, when the player is connect to server and the client downloads are ready.
 * then we call him, that this event should go to onPlayerConnected in PlayerController.
 * so we have a nice dashboard over all functions.
 */
class EventHandler {
    constructor(core) {
        this.core = core;
        //player stuffs
        mp.events.add("playerReady", (playerMp) => { this.core.playerController.onPlayerConnected(playerMp); });
        mp.events.add("playerCommand", (playerMp, command) => { this.core.playerController.onPlayerCommand(playerMp, command); });
    }
}
exports.EventHandler = EventHandler;
//# sourceMappingURL=eventHandler.js.map