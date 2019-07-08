const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = process.env.token;
const prefix = ("? ");
    
    bot.on('ready', function () {
        console.log("Oui jvais bossé patron xD")
        bot.user.setActivity('? help').catch(console.error)
    });
bot.on('guildMemberAdd', member => {
    let serverTag = member.guild.name
    const welcomechannel = member.guild.channels.find('name', 'bvn')
    var embed = new Discord.RichEmbed()
    .setColor('#76D880')
    .setDescription(`:inbox_tray: <@${member.user.id}> Bienvenue sur le serveur Officiel du serveur ${serverTag}  je t'invite à utiliser la commande ? help pour avoir des informations et de regarder le réglement du serveur merci et bon jeu à toi sur le serveur :video_game:`)
    return welcomechannel.send({embed})
});    

        
    bot.on('message', async message => {
    if (message.content.startsWith(prefix + "clear")) {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                message.channel.fetchMessages()
                   .then(function(list){
                        message.channel.bulkDelete(list);
                    }, 
	    function(err){message.channel.send("Pas de assez de permission pour executer la commande")})                        
            }
        }   
});
bot.login(cfg);
