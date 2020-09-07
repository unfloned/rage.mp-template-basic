# RageMP Base Template with [Typescript](https://www.typescriptlang.org/) and [TypeORM](https://typeorm.io/)

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

i want to show you the typescript language. This language is for myself the best language i've ever seen and i want to show you how easy it is to build awesome stuffs in the world. It should develope more people with it :-)

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
1. Download or clone this repository
2. extract the files to any folder on your system
3. Using a command prompt window to install modules on your `C:/your-folder` folder
    - Run the command prompt.
    - go to your folder path with `cd C:/your-folder`
    - run following npm command: 'npm install'

---

# Setup

> Config

the important config is your database config that is located in `server/ormconfig.json`.

if you want to change your packagename you must edit `src-server/tsconfig.json` and change the last foldername in `outDir` variable

> Start to Developing

in our case we have `src-client` and `src-server` that we must compile with typescript (`tsc`) because we want for server side scripting other packages instead of client side scripting.
that current problem is, that `server/` needs the same `node_modules` like in `src-server`. So currently you must use the same `packages.json` in `src-server/` and `server/`. **install packages in both folder!**

- use command prompt in `src-client/` and run `tsc --watch` or only one times `tsc`. now typescript compiles only the client-side scripting
- use command prompt in `src-server/` and run `tsc --watch` or only one times `tsc`. now typescript compiles only the server-side scripting
- read the comments in source-code to understand how the script is working
- make more classes, improvements, systems and make your own unique RageMP Server.


if you want to watch your server, that he restart if a file was changed, use package `pm2` or other package you want.
to install use `npm install pm2` in `server/` folder.

---
# Todo

i need something todo before this can be used:

- make a better way to duplicate or use packages.json from `src-server/` and `server/`
- a client system
---

# FAQ

currently nothing exists ...

---

# Support

if you need help, you can contact me in following ways:

- Skype: c0nc1l
- Discord: Concil#6452 and in RageMP Discord Server
- [RageMP Thread]() // not published right now
- Teamspeak³ Server (german): splasher.de