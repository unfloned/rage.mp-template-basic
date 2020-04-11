import { Core } from "../core";
import { Player } from "../../entity/Player";
import { isNullOrUndefined } from "util";

/**
 * The PlayerController. everything that has to do with the player has to go in here
 */
export class PlayerController {

    // Store player data from database in this Player array
    public players: Player[];

    constructor(protected core: Core) {
        
    }

    /**
     * to get the player object from the database with PlayerMp Class
     * this you must call everytime if you need the player data from database.
     * because we store this data in this.players array so we dont need check database everytime.
     * 
     * @param playerMp 
     */
    get(playerMp: PlayerMp): Player {
        if(!isNullOrUndefined(this.players[playerMp.id])) {
            return this.players[playerMp.id];
        }
        return undefined;
    }

    /**
     * onPlayerConnected is controlled by eventHandler.
     * this function will be called when the player connected. 
     * @param playerMp 
     */
    onPlayerConnected(playerMp: PlayerMp) {

        // you should here reset anything you can from the player
        // weapons reset, money reset and anything else.
        // set the player position if you want or disable him to control

        playerMp.outputChatBox(`Hey ${playerMp.name} and welcome to Base Template.`);
        playerMp.outputChatBox(`you can use /login or /register for Authentication your identity.`);

        // Kick the user if we have trouble with the Database connection.
        if(!this.core.Connection.isConnected) {
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
    async onPlayerDisconnect(playerMp: PlayerMp) {
        if(!isNullOrUndefined(this.players[playerMp.id])) {
            await this.core.Entity.update( Player, {username: this.players[playerMp.id].username}, this.players[playerMp.id]);
            delete this.players[playerMp.id];
        }
    }

    /**
     * onPlayerLogin will called when the player use the command /login [username] [password]
     * @param playerMp ragemp player object
     * @param inputUsername this is the username
     * @param inputPassword this is the password
     */
    async onPlayerLogin(playerMp: PlayerMp, inputUsername: string, inputPassword: string) {
        //Todo
        const player = await this.core.Entity.findOne(Player, { username: inputUsername});
        if(isNullOrUndefined(player)) {
            //player is not found in database
            playerMp.outputChatBox("username not found");
            return false;
        }
        
        if(player.password != inputPassword) {
            //the password does not match
            playerMp.outputChatBox("password does not match.");
            return false;
        }

        // all fine we continue with 
        // creating the player in our array
        // and call the spawn for him
        this.players[playerMp.id] = player;
        this.playerSpawn(playerMp);

    }

    async onPlayerRegister(playerMp: PlayerMp, inputUsername: string, inputPassword: string) {
        if(!isNullOrUndefined(this.players[playerMp.id])) {
            // player already logged in
            return false;
        }
        const prePlayer = await this.core.Entity.findOne(Player, { username: inputUsername});
        if(!isNullOrUndefined(prePlayer)) {
            //player is already registered
            playerMp.outputChatBox("Username is already registered with this Server"); 
            return false;
        }

        //Create the new Player Class
        let player = new Player();
        player.username = inputUsername;
        player.password = inputPassword;
        player.money = 10000;
        player.admin = 0;

        // Store the new player in player array
        this.players[playerMp.id] = player;

    }

    /**
     * do with the playerSpawn everything you want... give weapons, set skins, set position etc...
     * @param playerMp 
     */
    playerSpawn(playerMp: PlayerMp) {
        playerMp.position = new mp.Vector3(126.135, -1278.583, 29.270); // Set player Position [Strip Club DJ Booth]
    }

    onPlayerCommand(playerMp: PlayerMp, command: string) {
        if(command !== undefined) {
            const args = command.split(/[ ]+/);
            if(args[0] !== undefined) {
                switch(args[0]) {
                    case "help":
                        playerMp.outputChatBox("/login [username] [password]");
                    break;
                    case "login":
                        var username: string = args[1];
                        var password: string = args[2];

                        if(username == undefined && password == undefined) return this.sendCommandError(playerMp, `You must fill your arguments`, `login [username] [password]`);
                    break;
                    case "register":
                        var username: string = args[1];
                        var password: string = args[2];

                        if(username == undefined && password == undefined) {
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

    sendCommandError(playerMp: PlayerMp, msg: string, correctWay?: string) {
        playerMp.outputChatBox(`Error: ${msg}`);
        if(correctWay !== undefined) playerMp.outputChatBox(`Usage: /${correctWay}`);
    }
}