require('events').EventEmitter.prototype._maxListeners = 100;

const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

const token = config.bot.token;

client.login(token);
global.naughtyWords = config.blacklisted_words;


client.on('ready', () => {
    console.log(`Blush has started, monitoring ${client.users.size} users.`); 
    client.user.setPresence({ 
        status: 'dnd', 
        game: { 
            name: config.bot.game
        }
     });
     client.channels.get(config.bot.general).send(`Blush started successfully with ${client.users.size} users in Shibui's discord.`)
});


// Check if any naughty words are in the bot.
require("./handlers/noBadWordsCheck")(client)
require("./cmd/addWordsToBadWordList")(client)
require("./cmd/removeWordsFromBadWordList")(client)
// User Stuff
require("./cmd/getUserRecentScore")(client)
require("./cmd/getUserRecentScoreRelax")(client)
require("./cmd/getUserTopScore")(client)
require("./cmd/getUserTopScoreRelax")(client)
require("./cmd/getUserStats")(client)
require("./cmd/getUserStatsRelax")(client)
// Information
require("./cmd/faq")(client)
// Player Reporting
require("./cmd/pr")(client)
require("./handlers/playerReportingListener")(client)
