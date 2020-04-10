import { Connection } from "typeorm";
import { PlayerController } from "./player/PlayerController";
import { EventHandler } from "./eventHandler";

export class Core {

    //Main Variables
    public Database : Connection;

    //Event
    public eventHandle : EventHandler;

    //Player
    public playerController : PlayerController;

    //Vehicle

    constructor(database : Connection) {
        this.Database = database;
        this.eventHandle = new EventHandler(this);

        this.playerController = new PlayerController(this);
    }
}