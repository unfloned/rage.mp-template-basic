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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const core_1 = require("./system/core");
/**
 * we use the typeorm createConnection function at start from the server.
 * if this have error the Core class will not be fired.
 * the Core class is our main class from there all other things will be happens.
 * check core.ts class.
 */
typeorm_1.createConnection().then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    const core = new core_1.Core(connection);
})).catch((error) => {
    console.log("TypeORM / Database Connection has errors:");
    console.log(error);
});
//# sourceMappingURL=index.js.map