"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../../entity/Player");
const util_1 = require("util");
/**
 * The PlayerController. everything that has to do with the player has to go in here
 */
class PlayerController {
    constructor(core) {
        this.core = core;
    }
    /**
     * to get the player object from the database with PlayerMp Class
     * this you must call everytime if you need the player data from database.
     * because we store this data in this.players array so we dont need check database everytime.
     *
     * @param playerMp
     */
    get(playerMp) {
        if (!util_1.isNullOrUndefined(this.players[playerMp.id])) {
            return this.players[playerMp.id];
        }
        return undefined;
    }
    /**
     * onPlayerConnected is controlled by eventHandler.
     * this function will be called when the player connected.
     * @param playerMp
     */
    onPlayerConnected(playerMp) {
        // you should here reset anything you can from the player
        // weapons reset, money reset and anything else.
        // set the player position if you want or disable him to control
        playerMp.outputChatBox(`Hey ${playerMp.name} and welcome to Base Template.`);
        playerMp.outputChatBox(`you can use /login or /register for Authentication your identity.`);
        // Kick the user if we have trouble with the Database connection.
        if (!this.core.Connection.isConnected) {
            playerMp.outputChatBox(`We have an error with our Database.`);
            playerMp.outputChatBox(`You will be automaticly kicked from this server.`);
            playerMp.kick("Database error"); // Todo KickHandler
        }
    }
    /**
     * onPlayerDisconnect will called when the player disconnected from the server
     * we save then all changes from his entity in the database.
     * and delete his entry from our array we defined (this.players)
     * @param playerMp
     */
    onPlayerDisconnect(playerMp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!util_1.isNullOrUndefined(this.players[playerMp.id])) {
                yield this.core.Entity.update(Player_1.Player, { username: this.players[playerMp.id].username }, this.players[playerMp.id]);
                delete this.players[playerMp.id];
            }
        });
    }
    /**
     * onPlayerLogin will called when the player use the command /login [username] [password]
     * @param playerMp ragemp player object
     * @param inputUsername this is the username
     * @param inputPassword this is the password
     */
    onPlayerLogin(playerMp, inputUsername, inputPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            //Todo
            const player = yield this.core.Entity.findOne(Player_1.Player, { username: inputUsername });
            if (util_1.isNullOrUndefined(player)) {
                //player is not found in database
                playerMp.outputChatBox("username not found");
                return false;
            }
            if (player.password != inputPassword) {
                //the password does not match
                playerMp.outputChatBox("password does not match.");
                return false;
            }
            // all fine we continue with 
            // creating the player in our array
            // and call the spawn for him
            this.players[playerMp.id] = player;
            this.playerSpawn(playerMp);
        });
    }
    onPlayerRegister(playerMp, inputUsername, inputPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!util_1.isNullOrUndefined(this.players[playerMp.id])) {
                // player already logged in
                return false;
            }
            const prePlayer = yield this.core.Entity.findOne(Player_1.Player, { username: inputUsername });
            if (!util_1.isNullOrUndefined(prePlayer)) {
                //player is already registered
                playerMp.outputChatBox("Username is already registered with this Server");
                return false;
            }
            //Create the new Player Class
            let player = new Player_1.Player();
            player.username = inputUsername;
            player.password = inputPassword;
            player.money = 10000;
            player.admin = 0;
            // Store the new player in player array
            this.players[playerMp.id] = player;
        });
    }
    /**
     * do with the playerSpawn everything you want... give weapons, set skins, set position etc...
     * @param playerMp
     */
    playerSpawn(playerMp) {
        playerMp.position = new mp.Vector3(126.135, -1278.583, 29.270); // Set player Position [Strip Club DJ Booth]
    }
    onPlayerCommand(playerMp, command) {
        if (command !== undefined) {
            const args = command.split(/[ ]+/);
            if (args[0] !== undefined) {
                switch (args[0]) {
                    case "help":
                        playerMp.outputChatBox("/login [username] [password]");
                        break;
                    case "login":
                        var username = args[1];
                        var password = args[2];
                        if (username == undefined && password == undefined)
                            return this.sendCommandError(playerMp, `You must fill your arguments`, `login [username] [password]`);
                        break;
                    case "register":
                        var username = args[1];
                        var password = args[2];
                        if (username == undefined && password == undefined) {
                            return this.sendCommandError(playerMp, `You must fill your arguments`, `register [username] [password]`);
                        }
                        break;
                    default:
                        playerMp.outputChatBox(`your command ${args[0]} not exists. you get help with command: '/help'`);
                        break;
                }
            }
        }
    }
    sendCommandError(playerMp, msg, correctWay) {
        playerMp.outputChatBox(`Error: ${msg}`);
        if (correctWay !== undefined)
            playerMp.outputChatBox(`Usage: /${correctWay}`);
    }
}
exports.PlayerController = PlayerController;
//# sourceMappingURL=PlayerController.js.map