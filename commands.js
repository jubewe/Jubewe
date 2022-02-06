const fs = require("fs")

let f = JSON.parse(fs.readFileSync("./docs/commands.json"))
let cmdkeys = []
let cmds = []
let cmddescriptions = []

Object.keys(f).forEach(key => {
    if(!isNaN(Object.keys(f[key]))){
        cmdkeys.push(key)
        cmds.push(key)
        cmddescriptions.push(f[key])
    } else {
        Object.keys(f[key]).forEach(cmd => {
            cmdkeys.push(key)
            cmds.push(cmd)
            cmddescriptions.push(f[key][cmd])
        })
    }
})

cmds.forEach(cmd => {
    let cmdmsg = `${cmdkeys[cmds.indexOf(cmd)]} | ${cmd} | ${cmddescriptions[cmds.indexOf(cmd)]}`
    switch (cmdkeys[cmds.indexOf(cmd)]){
        case "prefix": {
            console.log("\x1b[5m%s\x1b[0m", cmdmsg);
            break;
        }
        case "public": {
            console.log("\x1b[32m%s\x1b[0m", cmdmsg)
            break;
        }
        case "approved_users": {
            console.log("\x1b[33m%s\x1b[0m", cmdmsg)
            break;
        }
        case "admin": {
            console.log("\x1b[31m%s\x1b[0m", cmdmsg)
            break;
        }
        case "owner": {
            console.log("\x1b[36m%s\x1b[0m", cmdmsg)
            break;
        }
        case "whisper": {
            console.log("\x1b[4m%s\x1b[0m", cmdmsg)
        }
    }
})
