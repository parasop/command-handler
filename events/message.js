const {  CLIENT_PREFIX  } = require('../config.json');
const { MessageEmbed } = require("discord.js");
module.exports = async (client, message) => {
    if (message.author.bot) return;
	  if (!message.guild) return;

   client.prefix = CLIENT_PREFIX;

   









   if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefixx.length).trim().split(/ +/g);
    //Making the command lowerCase because our file name will be in lowerCase
  const command = args.shift().toLowerCase();

  //Searching a command
    const cmd = client.commands.get(command);                 

   //Searching a command aliases
  const aliases = client.commands.find(x => x.info.aliases.includes(command))


process.on("unhandledRejection", (reason, promise) => {
    try {
        console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
    } catch {
        console.error(reason);
    }
});
require('events').EventEmitter.defaultMaxListeners = 30




  
   if(cmd){
    cmd.run(client, message, args);
  }else if(aliases){
    aliases.run(client, message, args);
  }else return



}
