import "reflect-metadata";
import { createConnection } from "typeorm";
import { Core } from "./app/core";
import {copyFileSync} from "fs";

/**
 * we use the typeorm createConnection function at start from the server.
 * if this have error the Core class will not be fired.
 * the Core class is our main class from there all other things will be happens.
 * check core.ts class.
 */


// Console colors
const FgReset="\x1b[0m";
const FgRed="\x1b[31m";
const FgGreen="\x1b[32m";
const FgYellow="\x1b[33m";
const FgBlue="\x1b[34m";

const ServerName: string = "BASE TEMPLATE"; // Simple Variable for server name



console.log(`${FgGreen}[${ServerName}]${FgReset} ${FgYellow}Connecting to Database${FgReset}`);
mp.events.delayInitialization = true; // Wait until database connection is connected


createConnection().then(async connection => { // create here with typeorm the database connection
    console.log(`${FgGreen}[${ServerName}]${FgReset} ${FgGreen}Successfully Connected to Database${FgReset}`);
    mp.events.delayInitialization = false; // The Server Process will continue

    new Core(connection); // Create our core / main class

}).catch( (error) => {
    console.log(`${FgGreen}[${ServerName}]${FgReset} ${FgGreen}TypeORM / Database Connection has errors:`);
    console.log(error);
});
