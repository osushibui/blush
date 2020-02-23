const config = require("../config.json");
const fs = require('fs');

module.exports = function(client) {
    client.on('message', async message => {
        
        if (message.content.startsWith(config.bot.prefix + "wordlist add")) {
            if (message.member.id != config.bot.owner_id) { return message.channel.send("Only Community Managers and up can use this command.") }
            // Please make a PR and help me fix this
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "wordlist add ");
            console.log(msg)
            msg = msg[1];

            global.naughtyWords.push(msg);
            config.blacklisted_words = global.naughtyWords;
            fs.writeFile('config.json', JSON.stringify(config, null, 2), function(err) {
                if (err) throw err;
            })
            return message.channel.send("Added.")
        }
    })
}
