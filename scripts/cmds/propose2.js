const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports = {
    config: {
        name: "propose2",
        version: "1.0",
        author: "RAHAT",
        countDown: 5,
        role: 0,
        shortDescription: "Purpose Your Beb",
        longDescription: "Purpose Your Beb",
        category: "love",
        guide: {
            vi: "{pn} @tag ",
            en: "{pn} @tag "
        }
    },
    onStart: async function ({ message, args, event, api }) {
        const mention = Object.keys(event.mentions);
        if (mention.length == 0) return message.reply("Please tor gf re mention de ðŸ¤¬");
        else if (mention.length == 1) {
            const one = event.senderID, two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "Please Babe Accept My Love </100%", attachment: fs.createReadStream(ptth) }) })
        } else {
            const one = mention[1], two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "Please Babe Accept My Love </100%", attachment: fs.createReadStream(ptth) }) })
        }
    }
};

async function bal(one, two) {
    const avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
    avone.circle();
    const avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
    avtwo.circle();
    const pth = "abcd.jpg";
    const img = await jimp.read("https://i.imgur.com/hrqu5Sp.jpeg");
    img.resize(1000, 1000).composite(avone.resize(165, 165), 260, 496).composite(avtwo.resize(165, 165), 590, 496);
    await img.writeAsync(pth);
    return pth;
              }
