const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = process.env.token;
const prefix = ("? ");
    
    bot.on('ready', function () {
        console.log("Oui jvais bossé patron xD")
        bot.user.setActivity('? help').catch(console.error)
    });
    
    bot.on('guildMemberAdd', member => {
      // Send the message to a designated channel on a server:
      const channel = member.guild.channels.find(ch => ch.name === 'bvn');
      // Do nothing if the channel wasn't found on this server
      if (!channel) return;
      // Send the message, mentioning the member
      channel.send(`Bienvenue sur le serveur Officiel du serveur Kub-Dom je t'invite à utiliser la commande ? help pour avoir des informations et de regarder le réglement du serveur merci et bon jeu à toi sur le serveur :video_game:  , ${member}`);
    });
        
    bot.on('message', async message => {
    	//help du staff envers un joueur
 	/*if(message.content.startsWith(prefix + "helpmod")) {	
	let myRole = message.guild.roles.find(role => role.name === "staff");
	var chm = bot.channels.find("name", "🚫šтαff🛠1");
	chm.send(`${message.author},demande de l'aide merci de l'aider `+myRole);
    }*/
        //Help de kubdom
    if(message.content === prefix + "Info") {
          var aide_embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setTitle(`:robot: Informations sur le serveur Kub-Dom`)
          .setDescription(`Voici mes commandes disponible :`)
          .setThumbnail(message.author.avatarURL)
          .addField("? Ip" ,"Ip du serveur disponiblezz")
          .addField("? Web" ,"lien du site OFFICIEL du serveur <3 ")
          .addField("? Serveur" ,"Etat du serveur")
          .setFooter("Menu Info bot - By Creep_1")
          .setTimestamp()
          message.channel.send(aide_embed);
    }
        if(message.content.startsWith(prefix + "Ip")){
        message.channel.send(`kub-dom.omgcraft.fr`);
        }
        
        if(message.content.startsWith(prefix + "Web")){
        message.channel.send(`le lien -> https://kubdom.000webhostapp.com`);
        }
        
        if(message.content.startsWith(prefix + "Serveur")){
        message.channel.send(`Le Serveur est fermé pour le moment désolé on finit bientôt :kissing_heart: `);
        }
    if (message.content.startsWith(prefix + "clear")) {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                message.channel.fetchMessages()
                   .then(function(list){
                        message.channel.bulkDelete(list);
                    }, function(err){message.channel.send("Pas de assez de permission pour executer la commande")})                        
            }
        }
    //message pour afficher le help   
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
});
bot.login(cfg);
