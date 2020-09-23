# [Rage.MP](https://www.rage.mp) Base Template with [Typescript](https://www.typescriptlang.org/) and [TypeORM](https://typeorm.io/)

> ! Still in Development - the code can change anytime. !

not all systems are ready to use so this template can change anytime.

> Description

**RageMP Base Template** is a basic template for your RageMP Server written in Typescript.

It's an easy way to start your server development. This Template have a few Features:

- Event Handler
- Player System
- Vehicle System 
- Admin System (kick, ban, mute)
- Login Register System (/login /register)

maybe some feature must be developed and will be updated soon.

> Why?

i want to show you the typescript language. 
This language is for myself the best language i've ever seen and i want to show you how easy it is to 
build awesome stuffs in the world. It should develope more people with it :-)

> Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Setup](#setup)
- [FAQ](#faq)
- [Support](#support)

---

# Requirements
- [RageMP](http://rage.mp) - RAGE Multiplayer is an multiplayer modification for Grand Theft Auto V that is alternative to GTA Online.
- [nodejs](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Database - a database like mongodb or mysql that fits in typeORM
- Basic Known - a few simple basics in javascript/typescript

---

# Installation
1. create a new folder anywhere on your system
1. Download or clone this repository
2. extract the files to any folder on your system
3. Using a command prompt window to install modules on your `C:/your-folder` folder
    - Run the command prompt.
    - go to your folder path with `cd C:/your-folder`
    - run following npm command: 'npm install'

---

# Setup

you must create following folder structure or edit `server/tsconfig.json` / `client/tsconfig.json` to your own server-files folder.
- server-files/ragemp-server.exe
- server/
- client/

> Config

the important config is your database config that is located in your `server-files/ormconfig.json`. If you dont have this file you can create this with following content:

```json
{
   "type": "mysql",
   "host": "localhost",
   "port": 3306,
   "username": "ragemp",
   "password": "",
   "database": "ragemp",
   "synchronize": true,
   "logging": false,
   "entities": [
      "base/app/database/**.js"
   ]
}
```
`entities` variable are important, so typorm knows the database structure. If you changed the outDir in tsconfig.json you must update here the `base/` folder to your own packagename folder.

if you want to change your packagename you must edit `server/tsconfig.json` and change the last foldername in `outDir`.

> Start to Developing

in our case we have `client` and `server` that we must compile with typescript (`tsc`) because we want for server side scripting other packages instead of client side scripting.
that current problem is, that `server-files/` needs the same `node_modules` like in `server`. So currently you must use the same `packages.json` in `server-files/` and `server/`. **install packages in both folder!**

- use command prompt in `client/` and run `tsc --watch` or only one times `tsc`. now typescript compiles only the client-side scripting
- use command prompt in `server/` and run `tsc --watch` or only one times `tsc`. now typescript compiles only the server-side scripting
- read the comments in source-code to understand how the script is working
- make more classes, improvements, systems and make your own unique RageMP Server.



---
# Todo

i need something todo before this can be used:

- make a better way to duplicate or use packages.json from `server/` and `server-files/`
- a client system
---

# FAQ

currently nothing exists ...

---

# Support

if you need help, you can contact me:
- Discord: Concil#6452 and in RageMP Discord Server or Rage Open Source 
- [RageMP Thread]() // not published right now