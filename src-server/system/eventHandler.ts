import { Core } from "./core";

/**
 * This is a simple event handler.
 * With this class you must/should put alle RageMP Events and call them, where they must going.
 * like playerReady will be called, when the player is connect to server and the client downloads are ready.
 * then we call him, that this event should go to onPlayerConnected in PlayerController.
 * so we have a nice dashboard over all functions.
 */
export class EventHandler {
    constructor(protected core: Core) {

        //player stuffs
        mp.events.add("playerReady", (playerMp: PlayerMp) => { this.core.playerController.onPlayerConnected(playerMp); });
        mp.events.add("playerCommand", (playerMp: PlayerMp, command: string) => { this.core.playerController.onPlayerCommand(playerMp, command); });
    }
}