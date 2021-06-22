const logger = require("wax-logger");
const handler = require('wax-command-handler');
const  vdreaction  = require("../database/models/vdreact.js");
//const {vdr_events} = require("../database/ready/vdreact.js");


module.exports = async (message) => {
    /*
    vdreaction.find(async function(err, reactions) {
        if (err) return console.error(`viewvideoreactions: ${err}`);

        //por enquanto não reage a bot, mas tem que reagir à lorita!!!
        if (message.channel.id == vdr_events.chatID && !message.author.bot)
            message.channel.send(reactions[vdr_events.count++].reaction);

        if (vdr_events.count >= reactions.length)
            vdr_events.count = 0;
    });
    */
}