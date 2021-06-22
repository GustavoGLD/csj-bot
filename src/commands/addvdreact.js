/**
 * o que é o videoreaction?
 * bot mandar enviar mensagem de elogio quando um vídeo for postado no chat #videos-novos
 */

const {vdr_model} = require("../database/models/vdreact");


 module.exports = {
    name: "addvdreact",
    description: "adicionar reações de videos novos",
    aliases: ["addvdreact", "addvdreacts"],
    usage: "!!addvdreact <nova_reação>",
    cooldown: 5,
    permissions: ["MANAGE_MESSAGES"],

    execute(client, message, args) {
        const reaction = new vdr_model({
            reaction: args.join(" "),
        });

        reaction.save(function (err, reaction) {
            if (err) return console.log(`addvideoreaction: mongoose: ${err}`);
        });

        message.channel.send('Uma nova reação de vídeo "' + args.join(" ") +  '"foi adicionada aos repositórios!');
    },
};
