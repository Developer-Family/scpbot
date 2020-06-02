const Discord = require("discord.js");

export function create017() {
    const scpEmbed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Voici __SCP-017__:")
          .setImage(
            "http://fondationscp.wdfiles.com/local--files/scp-017/017--SCP-017.jpg"
          );
    return scpEmbed;
}