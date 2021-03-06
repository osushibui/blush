const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const { query } = require("../handlers/DatabaseHandler");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "top rx")) {
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "top rx ");
            msg = msg[1];
            try {
                var user = await query("SELECT * FROM users WHERE username = ?", msg);
                var recentScore = await query("SELECT * FROM scores_relax INNER JOIN beatmaps ON scores_relax.beatmap_md5 = beatmaps.beatmap_md5 WHERE userid = ? ORDER BY pp DESC;", user[0].id)
                let color = randomcolor_1.randomColor();
                let hex = parseInt(color.replace(/^#/, ''), 16);
                
                const embed = new Discord.RichEmbed()
                    .setTitle("Top Score For " + msg)
                    .setURL("https://shibui.pw/u/" + recentScore[0].userid)
                    .setColor(hex)
                    .setDescription(recentScore[0].song_name)
                    .addField("Accuracy:", Math.round(recentScore[0].accuracy * 100) / 100 + "%")
		    .addField("Combo:", recentScore[0].max_combo)
                    .addField("Misses:", recentScore[0].misses_count)
                    .addField("PP:", Math.round(recentScore[0].pp * 100) / 100)
                    .setImage("https://assets.ppy.sh/beatmaps/" + recentScore[0].beatmapset_id + "/covers/cover.jpg")
                message.channel.send(embed);
            } catch (ex) {
                message.channel.send("User doesnt exist");
            }
        }
    })
}
