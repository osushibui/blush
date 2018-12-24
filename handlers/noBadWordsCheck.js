module.exports = function (client) {
    client.on("message", message => {
        var messageToCheck = message.content;
        for (let i = 0; i < global.naughtyWords.length; i++) {
            if (messageToCheck.indexOf(global.naughtyWords[i]) > -1) {
                console.log(global.naughtyWords)
                return message.delete();
            }
        }
    })
}