import "reflect-metadata";
import { createConnection } from "typeorm";
import { Core } from "./system/core";

/**
 * we use the typeorm createConnection function at start from the server.
 * if this have error the Core class will not be fired.
 * the Core class is our main class from there all other things will be happens.
 * check core.ts class.
 */

const FgReset="\x1b[0m";
const FgRed="\x1b[31m";
const FgGreen="\x1b[32m";
const FgYellow="\x1b[33m";
const FgBlue="\x1b[34m";

console.log(`${FgGreen}[BASE TEMPLATE]${FgReset} ${FgYellow}Connecting to Database${FgReset}`);
mp.events.delayInitialization = true;

createConnection().then(async connection => {
    console.log(`${FgGreen}[BASE TEMPLATE]${FgReset} ${FgGreen}Successfully Connected to Database${FgReset}`);
    mp.events.delayInitialization = false;

    new Core(connection);

}).catch( (error) => {
    console.log(`${FgGreen}[BASE TEMPLATE]${FgReset} TypeORM / Database Connection has errors:`);
    console.log(error);
});
