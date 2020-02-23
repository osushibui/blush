const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", message => {
        if (message.content.startsWith(config.bot.prefix + "faq")) {
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "faq ");
            msg = msg[1];
            if (msg === "") { return message.channel.send("This is not a valid option.") }
            if (msg === undefined) { return message.channel.send("This is not a valid option.") }

            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            const embed = new Discord.RichEmbed()
                .setColor(hex)

            if (msg.toLowerCase() == "email") {
                embed.setTitle("Email Verification")
                .addField("**Description**", "As most people may know, Shibui, and many other servers do not accept email verification. You can find how to connect and verify your account on Shibui at https://shibui.pw/connect.")
            } else if (msg.toLowerCase() == "appeals") {
                embed.setTitle("Appealing Your Restriction")
                .addField("**Description**", "Shibui accepts restriction appeals within 1 (one) month of restriction. Although staff are very confident in their decision when restricting users they are willing to accept proof of legitimacy if it was in error.")
            } else if (msg.toLowerCase() == "contact") {
                embed.setTitle("Contacting Staff")
                .addField("**Description**", "Depending on the situation there's many ways to contact the Shibui staff (discord, in-game). The most reliable way of getting in contact with staff is to message a Community Manager (or Owner) in-game or on discord if the issue is urgent or not about restrictions.")
            } else if (msg.toLowerCase() == "cert") {
                embed.setTitle("'Connection failed. Retrying in 30s'")
                .addField("**Description**", "This usually means that the certificate was not installed correctly. Download the shibui.crt file (from https://shibui.pw/static/shibui.crt) and click install certificate, set the store location to Local Machine, Place all certificates in the following store, click browse and choose Trusted Root Certification Authorities. Then next and finish. All you need to do after that is restart osu! and then log in.")
            } else if (msg.toLowerCase() == "hosts") {
                embed.setTitle("Hosts File Error")
                .addField("**Description**", "If the switcher says it is in read only, or you are still connected to bancho (or another server), open C:\Windows\System32\drivers\etc\hosts with notepad (running as admin) and go to https://shibui.pw/static/hosts.txt and copy paste the text that you get from there into the hosts file and save it.")
            } else if (msg.toLowerCase() == "mac") {
                embed.setTitle("Hosts File Error")
                .addField("**Description**", "Open /private/etc/hosts with your text editor of choice (running as sudo/admin) and go to https://shibui.pw/static/hosts.txt and copy paste the text that you get from there into the hosts file and save it then install the certificate that can be downloaded from https://shibui.pw/static/shibui.crt")
            } else if (msg.toLowerCase() == "linux") {
                embed.setTitle("Hosts File Error")
               .addField("**Description**", "Open /etc/hosts with your text editor of choice (running as sudo/admin) and go to https://shibui.pw/static/hostslinux.txt and copy paste the text that you get from there into the hosts file and save it then install the certificate that can be downloaded from https://shibui.pw/static/shibui.crt. For help installing the certificate refer to: https://shibui.pw/doc/linux")
            } else if (msg.toLowerCase() == "help") {
                embed.setTitle("FAQ Help")
                .setDescription("Do faq (field title) to use it.")
                .addField("Email", "Explains why you haven't recieved the email verification :facepalm:")
                .addField("Appeals", "Explains how appeals works within Shibui")
                .addField("Contact", "Lists ways to contact the Shibui staff")
                .addField("Cert", "How to install the certificate manually")
                .addField("Hosts", "How to edit hosts file manually")
                .addField("mac", "How to connect on mac")
                .addField("linux", "How to connect on linux")
                .addField("help", "Shows this")

            } else {
                return message.channel.send("This is not a valid option, maybe try faq help?") 
            }
            return message.channel.send(embed)
        }
    })
}
