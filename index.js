const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = process.env.token;
const prefix = ("? ");

bot.on('ready', function () {
    console.log("Oui jvais bossé patron xD")
    bot.user.setActivity('? help').catch(console.error)
});
bot.on('guildMemberAdd', async member => {
const channel = member.guild.channels.find('${member}', 'bvn');
if (!channel) return;
channel.send(`Bienvenue sur le serveur ${member}`);
}
);
bot.on('message', async message => {
    //discution avec le bot 	
	if (message.content === "Bonjour"){
        message.reply("Heureux de te revoir parmis nous.")
    }	
	if (message.content === "Comment vas tu ?"){
        message.reply("Bien et toi comment tu vas ?")
    }
	if (message.content === "Que fais tu ?"){
        message.reply("je suis entrain de suivre mon programme")
    }
	
	if (message.content === "Génial nan ?"){
        message.reply("(￣▽￣)ノ")
    }
	if (message.content === "Kub-Dom ?"){
        message.reply("Oui c'est moi ? Si tu veux plus d'aide je t'invite à faire la commande Cp help")
    }
	if (message.content === "je t'aime"){
        message.reply("je comprends pas le concept de l'amour mon créateur m'a rien dit sur ce sujet")
    }
	if (message.content === "Je t'aime"){
	message.reply("Je doit aimer que PN car je suis sage")
   }	
   	if (message.content === prefix + "avatar") {
       		const avatar = (message.author.avatarURL);
	message.author.createDM().then(channel => {
	channel.send(avatar)
	console.log(`${message.author},`,avatar)
	});
	/*if (message.content === "test" + member.guild.channels.find('cяεερ_1 ☠')) {
	message.author.createDM().then(channel => {
	channel.send(":heart:")
	console.log('message envoyé')
		});*/
  }
	//message pour 
	if(message.content === prefix + "Quizz") {
	   message.channel.send(`pas encore codé ${message.author}`);
    }

	//Help de kubdom
if(message.content === prefix + "Info") {
      var aide_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:robot: Informations sur le serveur Kub-Dom`)
      .setDescription(`Voici mes commandes disponible :`)
      .setThumbnail(message.author.avatarURL)
      .addField("? Ip" ,"Pas encore disponible")
      .addField("? Web" ,"lien du site OFFICIEL du serveur <3 ")
      .addField("? Serveur" ,"Etat du serveur")
      .setFooter("Menu Info bot - By Creep_1")
      .setTimestamp()
      message.channel.send(aide_embed);
}
	if(message.content.startsWith(prefix + "Ip")){
	message.channel.send(`On a dit quoi c'est n'est pas encore disponible`);
	}
	
	if(message.content.startsWith(prefix + "Web")){
	message.channel.send(`le lien -> https://kubdom.000webhostapp.com`);
	}
	
	if(message.content.startsWith(prefix + "Serveur")){
	message.channel.send(`Le Serveur est fermé pour le moment désolé on finit bientôt :kissing_heart: `);
	}
	//message pour afficher le menu discusion 
	if(message.content === prefix + "discu") {
      var aide_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:robot: Comment communiquer avec moi !`)
      .setDescription(`Voici mes commandes disponible :`)
      .setThumbnail(message.author.avatarURL)
      .addField("Bonjour" ,"Je réponds à ça")
      .addField("Comment vas tu ?" ,"Je réponds à ça")
      .addField("Que fais tu ?" ,"Je réponds à ça")
      .addField("Génial nan ?" ,"Je réponds à ça")
      .addField("Kub-Dom ?" ,"Je réponds à ça")//erreur corrigé
      .addField("je t'aime" ,"Je réponds à ça")//rajouter dans le menu 07/11/2018
      .setFooter("Menu discusion bot - By Creep_1")
      .setTimestamp()
      message.channel.send(aide_embed);
    }
    //message pour afficher le help   
    if(message.content === prefix + "help") {
      var aide_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:robot: Voici mes catégories d'aide !`)
      .setDescription(`Voici mes commandes disponible :`)
      .setThumbnail(message.author.avatarURL)
      .addField(":tada: Fun", "Fais `? fun` pour voir mes commandes d'animation !")
      .addField(":writing_hand: Discusion bot","Fais `? discu` pour voir comment discuter avec moi !")
      .addField(":writing_hand: Afficher les Informations de KUB-DOM","Fais `? Info` pour plus d'informations!")
      .setFooter("Menu d'aide - By Creep_1")
      .setTimestamp()
      message.channel.send(aide_embed);
    }
//message pour afficher le fun
    if(message.content === prefix + "fun") {
      var fun_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes amusantes !`)
      .setThumbnail(message.author.avatarURL)
	  .addField("? cat", "Affiche des gifs de chat")
	  .addField("? narnia", "Affiche des gifs de narnia")
	  .addField("? wtf", "Affiche des gifs wtf")
	  .addField("? Yuki", "Affiche des images de (attention c'est dure) Yuki")
      	.addField("? avatar", "Envoie l'image de votre avatar en mp (utilité je sais pas mais je sais que ça marche :c)")
      .setFooter("Commande Fun - By Creep_1")
      .setTimestamp()
      message.channel.send(fun_embed);
    }
    //message pour afficher les commandes du fun
if(message.content.startsWith(prefix + "cat")){
        var cat = [
			"https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
			"https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
			"https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif"
		];
    var gif = cat[Math.floor(Math.random() * cat.length)]; 
	
	var cat_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle(':cat: Chat:')
	 .setImage(gif)
	.setFooter('CHAT CHAT CHAT CHAT')
	message.channel.send(cat_embed);
	}
	
	if(message.content.startsWith(prefix + "Yuki")){
        var Yuki = [
			"https://cdn.discordapp.com/attachments/417516189619585024/507993319767408660/Snapchat-66221107.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507993515943264286/Snapchat-1883413935.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507993646373535746/Snapchat-410157663.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507993757182853130/Snapchat-1423020034.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507994773336883200/IMG_20180107_122344.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507995280990273549/IMG_20180416_194429.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507996560240541698/IMG_20180703_101443.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507996898221883404/IMG_20180714_192659_003.jpg"
		

		];
    var gif = Yuki[Math.floor(Math.random() * Yuki.length)]; 
	
	var Yuki_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle(':cat: Chat:')
	 .setImage(gif)
	.setFooter('CHAT CHAT CHAT CHAT')
	message.channel.send(Yuki_embed);
	}
	
	if(message.content.startsWith(prefix + "narnia")){
        var narnia = [
			"https://media.giphy.com/media/ytL3y83qPtic8/giphy.gif",
			"https://media.giphy.com/media/4PuHxplO8XuyA/giphy.gif",
			"https://media.giphy.com/media/mEuI7NjX90BNu/giphy.gif"
			
				];
    var gif = narnia[Math.floor(Math.random() * narnia.length)]; 
	
	var narnia_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle('Narnia')
	 .setImage(gif)
	.setFooter("Narnia Narnia Narnia Narnia")
	message.channel.send(narnia_embed);
	}
		if(message.content.startsWith(prefix + "wtf")){
        var aleatoire = [
			"https://media.giphy.com/media/l46Cuu0O6xJ42z66I/giphy.gif",
			"https://media.giphy.com/media/13BwjdpxACoBPO/giphy.gif",
			"https://media.giphy.com/media/ToMjGpPbMMFCWHrqk6Y/giphy.gif",
			"https://media.giphy.com/media/AIgTmKOesNSWA/giphy.gif",
			"https://media.giphy.com/media/QxZQ7dSV4j6GQ/giphy.gif",
			"https://media.giphy.com/media/IYqe9gVpujtWo/giphy.gif",
			"https://media.giphy.com/media/13nhYQqKEPQAyA/giphy.gif",
			"https://media.giphy.com/media/o8GQT5Ipi4spy/giphy.gif"
	
				];
    var gif = aleatoire[Math.floor(Math.random() * aleatoire.length)]; 
	
	var aleatoire_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle('WTF')
	 .setImage(gif)
	.setFooter("WTF WTF WTF WTF WTF")
	message.channel.send(aleatoire_embed);
	}
 //message pour afficher le mod
	 if(message.content === prefix + "mod") {
      var mod_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes modérations !`)
      .setThumbnail(message.author.avatarURL)
      .addField("? kick <@user>", "Kick l'utilisateur !")
      .addField("? ban <@user>", "Ban l'utilisateur !")
      .addField("? mute <@user>", "Mute l'utilisateur mentionné")
      .addField("? unmute <@user>", "Unmute l'utilisateur mentionné")
      .setFooter("Commande modération - By Creep_1")
      .setTimestamp()
      message.channel.send(mod_embed);
    }
	//message pour afficher les commandes du mod
	 if(message.content.startsWith(prefix + "kick")){
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez metionner un utilisaeur")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe :/")
        }
    
        if(message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour kick");
        }
    
        kick.kick().then(member => {
            message.channel.send(`${member.user.username} est kick pas ${message.author.username}`);
        });
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la perission");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe");
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour ban");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
        });   
    }
	 
    if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
        });
    }

    if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${mute.user.username} n'est plus mute !`);
		   });
    }
if (message.content.startsWith(prefix + "clear")) {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("Pas de assez de permission pour executer la commande")})                        
        }
    }
});
bot.login(cfg);
