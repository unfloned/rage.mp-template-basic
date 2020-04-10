import { Core } from "./core";

export class EventHandler {
    constructor(protected core: Core) {
        mp.events.add("playerReady", this.core.playerController.onPlayerConnected);
    }
}