const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

const token = config.bot.token;

client.login(token);
global.naughtyWords = config.blacklisted_words;


client.on('ready', () => {
    console.log(`Chiissai has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setPresence({ 
        status: 'online', 
        game: { 
            name: config.bot.game
        }
     });
     client.channels.get(config.bot.general).send(`Chiissai has started, with ${client.users.size} users in the Yozora discord.`)
});


// Check if any naughty words are in the bot.
require("./handlers/noBadWordsCheck")(client)
require("./cmd/addWordsToBadWordList")(client)

//