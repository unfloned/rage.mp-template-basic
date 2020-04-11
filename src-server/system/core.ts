import { Connection, EntityManager } from "typeorm";
import { PlayerController } from "./player/PlayerController";
import { EventHandler } from "./eventHandler";
import { Utils } from "./utils";

/**
 * Core class is just a simple class who manage all other classes.
 * if you create a new class, you can add this here.
 * constructor function in class's will automaticly called when the object (class) will be created.
 * so if you do `const core: Core = new Core();` (we have already done this on index.ts) then constructor() will called.
 * hint: when you create a class dont forget to set the constructor paramter for this core class.
 * example: `this.eventHandle = new EventHandler(this);` this means you give the class'EventHandler' the Core class
 * and you can access in eventhandler all variable from core class if the variables are public
 * see eventhandler constructor paramter for example how todo this in your new class.
 * ** more you can read in the forum thread i've created and linked in github repository.
 * 
 * ----
 * 
 * in the core class you can simple store main Variables to access from other classes
 */


// Todo:
// Vehicle System
// Login Register System (admin, money)
// Admin System (kick, ban, timeban)

export class Core {

    //Main
    public Entity: EntityManager;
    public Connection: Connection;

    //General
    public eventHandle: EventHandler;
    public utils: Utils;

    //Player
    public playerController: PlayerController;

    //Vehicle
    //public vehicleController: VehicleController;

    //Stuffs



    constructor(databaseConnection : Connection) {

        // Initialize Main
        this.Connection = databaseConnection;
        this.Entity = databaseConnection.manager;

        // Initialize General
        this.eventHandle = new EventHandler(this);
        this.utils = new Utils(this);

        // Initialize Player
        this.playerController = new PlayerController(this);

        // Initialize Vehicle
        //this.vehicleController = new VehicleController(this);
        
        // Initialize Stuffs
        // ..
        
        
        console.log(`[BASE-TPL] All systems loaded and ready. Database: ${databaseConnection.isConnected}`);
    }
}