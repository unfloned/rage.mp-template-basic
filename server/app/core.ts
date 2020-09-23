import { Connection, EntityManager } from "typeorm";
import {Events} from "./system/events";
import {Utils} from "./system/utils";
import {PlayerCore} from "./system/player/playerCore";
import {Commands} from "./system/player/commands";
import {VehicleCore} from "./system/vehicle/vehicleCore";

/**
 * Core class is just a simple class who manage all other classes.
 * if you create a new class, you can add this here.
 * constructor function in class's will automaticly called when the object (class) will be created.
 * so if you do `const core: Core = new Core();` (we have already done this on index.ts) then constructor() will called.
 * hint: when you create a class dont forget to set the constructor paramter for this core class.
 * example: `this.eventHandle = new Events(this);` this means you give the class'Events' the Core class
 * and you can access in eventhandler all variable from core class if the variables are public
 * see eventhandler constructor paramter for example how todo this in your new class.
 * ** more you can read in the forum thread i've created and linked in github repository.
 * 
 * ----
 * 
 * in the core class you can simple store main Variables to access from other classes
 */

export class Core {

    //Main
    public Entity: EntityManager;
    public Connection: Connection;

    //General
    public eventHandle: Events;
    public utils: Utils;

    //Player
    public playerCore: PlayerCore;
    public commands: Commands;

    //Vehicle
    public vehicleCore: VehicleCore;

    //Stuffs
    // ..


    constructor(databaseConnection : Connection) {

        // Initialize Main
        this.Connection = databaseConnection;
        this.Entity = databaseConnection.manager;

        // Initialize General
        this.eventHandle = new Events(this);
        this.utils = new Utils(this);

        // Initialize Player
        this.playerCore = new PlayerCore(this);
        this.commands = new Commands(this);

        // Initialize Vehicle
        this.vehicleCore = new VehicleCore(this);
        
        // Initialize Stuffs
        // ..
        
        
        console.log(`[BASE TEMPLATE] All systems loaded and ready. Database: ${databaseConnection.isConnected}`);
    }
}