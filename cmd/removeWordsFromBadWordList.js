const config = require("../config.json");
const fs = require('fs');

module.exports = function(client) {
    client.on('message', async message => {
        if (message.content.startsWith(config.bot.prefix + "nazi remove")) {
            // Please make a PR and help me fix this
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "nazi remove ");
            console.log(msg)
            msg = msg[1];
            global.naughtyWords = global.naughtyWords.filter(e => e !== msg);
            console.log(global.naughtyWords)
            config.blacklisted_words = global.naughtyWords;
            fs.writeFile('config.json', JSON.stringify(config, null, 2), function(err) {
                if (err) throw err;
            })
            return message.channel.send(`Removed ${msg} from blacklist!`)
        }
    })
}