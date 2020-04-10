import "reflect-metadata";
import {createConnection, Connection} from "typeorm";
import { Core } from "./system/core";





createConnection().then(async connection => {
    const core : Core = new Core(connection);

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");

}).catch( (error) => {
    console.log(" TypeORM / Database Connection has errors:");
    console.log(error);
});
