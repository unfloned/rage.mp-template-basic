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

- change your `tsconfig.json`
    - you can change your package name in `"outDir": "./packages/baseTemplate/",`
- change database config in `ormconfig.json` to your own

> Start to Developing
- use command prompt in your server-files folder `tsc --watch` for watching your `.ts` files and compile these automaticly to js files
- if you want use `npm install pm2` to monitoring your server and restart the server automaticly on file changing
- read the comments in source-code to understand how the script is working
- make more classes, improvements, systems and make your own unique RageMP Server.



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