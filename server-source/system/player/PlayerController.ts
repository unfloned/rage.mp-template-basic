import { Core } from "../core";
import { Player } from "../../entity/Player";

export class PlayerController {

    public players : Player[];

    constructor(protected core: Core) {

    }

    onPlayerConnected(playerMp: PlayerMp) {
        // what happens if player is connected...
        // was defined by eventhandler

        playerMp.outputChatBox(`Hey ${playerMp.name} and welcome to Base Template.`);
        playerMp.outputChatBox(`you must /login or /register for authenticate your identity.`);
    }

    onPlayerComment(playerMp: PlayerMp, command: string) {
        if(command !== undefined) {
            const args = command.split(/[ ]+/);
            if(args[0] !== undefined) {
                switch(args[0]) {
                    case "help":
                        playerMp.outputChatBox("/login [username] [password]");
                    break;
                    case "login":
                        const username: string = args[1];
                        const password: string = args[2];

                        if(username == undefined && password == undefined) {
                            return this.sendCommandError(playerMp, `You must fill your arguments`, `login [username] [password]`);
                        }
                    break;

                    default: 
                        playerMp.outputChatBox(`your command ${args[0]} not exists. Try another one.`);
                    break;

                } 
            }
        }
    }

    sendCommandError(playerMp: PlayerMp, msg: string, correctWay: string) {
        playerMp.outputChatBox("Your command you trying is not working:");
        playerMp.outputChatBox(msg);
        playerMp.outputChatBox("you can only use this command with: ");
        playerMp.outputChatBox(correctWay);
    }
}