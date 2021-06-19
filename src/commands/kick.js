 module.exports = {

    //info
    name: 'kick',
    description: "Expulsar membro (cujo pode retornar)",
    aliases: [ "expulsar", "expulse", "kickar" ],
    cooldown: 5,
    permissions: [ "KICK_MEMBERS" ],

    execute(client, message, args) {    
        //Identificar membro a ser kickado
        const user_kicked   = message.mentions.users.first();
        const member_kicked = message.guild.member(user_kicked);

        //Identificar o motivo
        let the_reason = `(by: ${message.author.tag})`;
        for (i in args) {
            if (i != 0){
                the_reason += " " + args[i];
            }
        }   

        //Kickar
        member_kicked
        .kick(the_reason)
        .then(() => {
            message.reply(`o membro ${user_kicked.tag} foi kickado`);
        })
        .catch(err => {
            message.reply(`não foi possível kickar o membro ${user_kicked.tag}`);
            console.error(err);
        });
    },
};
