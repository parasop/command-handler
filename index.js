const fs = require("fs");
const { Collection, Client } = require("discord.js");
const {  TOKEN  } = require("./config.json")



const client = new Client();//Making a discord bot client
client.commands = new Collection();
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});


let modules = ["utilities", "general"];
modules.forEach(function(module) {
fs.readdir(`./commands/${module}`, (err, files) => {
  if (err) return console.error(err);
  files.forEach(function(file) {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${module}/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});
});







client.login(TOKEN);
