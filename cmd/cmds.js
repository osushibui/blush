const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", message => {
        if (message.content.startsWith(config.bot.prefix + "help")) {
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "help ");
            msg = msg[1];

            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            const embed = new Discord.RichEmbed()
                .setColor(hex)
                .setImage("https://shibui.pw/static/logos/logo.png")

                embed.setTitle("Help (Commands)")
                .setDescription("Do <command> to use them.")
                .addField("FAQ (faq help)", "Contains help to some general connection issues and contact to staff.")
                .addField("Top Relax Score (by user) (top rx <user>)", "Shows a certain user's top play on their relax profile.")
                .addField("Top Relax Score (by user) (top reg <user>)", "Shows a certain user's top play on their vanilla profile.")
                .addField("View Player's Relax Stats (stats rx <user>)", "Shows a certain user's total pp on relax.")
                .addField("View Player's Vanilla Stats (stats reg <user>)", "Shows a certain user's total pp on vanilla.")
                .addField("View Player's Most Recent Relax Score (recent rx <user>)", "Shows their most recent relax score (includes retries)")
		            .addField("View Player's Most Recent Vanilla Score (recent reg <user>)", "Shows their most recent vanilla score (includes retries)")
                .addField("help", "Shows this")
		message.channel.send(embed);
	}
    })
}
