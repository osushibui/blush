const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "rqs")) {
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.RichEmbed()
            .setTitle("Hello, and welcome to the replays upload request channel.")
            .addField("Information", "Please stick to the format below when requesting and **do not** tag admins here.")
            .addField("Format", "```Username:\nMap Link:\nSkin Link:\nWhy is your play unique/upload worthy?:\nReplay Link (copy from download button on website):```")
            message.channel.send(embed)
        }
    })
}
