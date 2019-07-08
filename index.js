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
if(message.content === prefix + "help") {
            var aide_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`:robot: Voici mes catégories d'aide !`)
            .setDescription(`Voici mes commandes disponible :`)
            .setThumbnail(message.author.avatarURL)
            .addField(":writing_hand: Afficher les Informations de KUB-DOM","Fais `? Info` pour plus d'informations!")
            .setFooter("Menu d'aide - By Creep_1")
            .setTimestamp()
            message.channel.send(aide_embed);
}
if (message.content.startsWith(prefix + "clear")) {
   if (message.member.hasPermission("MANAGE_MESSAGES")) {
       message.channel.fetchMessages()
       .then(function(list){
       message.channel.bulkDelete(list);}, 
function(err){message.channel.send("Pas de assez de permission pour executer la commande")})                        
}
}   

});
bot.login(cfg);
