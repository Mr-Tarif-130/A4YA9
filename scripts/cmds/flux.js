const axios = require("axios");

const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`,
  );
  return base.data.xnil;
};

module.exports.config = {
  name: "flux",
  version: "2.0",
  role: 2,
  author: "xnil",
  description: "flux ai Image generate ",
  category: "ai generate",
  guide: "{pn} prompt",
  countDown: 15,
};

module.exports.onStart = async ({ message, event, args, api }) => {
  try {
  const prompt = args.join(" ");
    const ok = message.reply('W8•••Boss~👨🏿‍🌾')
    api.setMessageReaction("✆", event.messageID, (err) => {}, true);
    const { data } = await axios.get(
          `${await baseApiUrl()}/flux?prompt=${prompt}`
    );
    api.setMessageReaction("🫨", event.messageID, (err) => {}, true);
     message.unsend(ok.messageID)
    await message.reply({
          body: `Here's your image`, 
          attachment: await global.utils.getStreamFromURL(data.image) 
      });
  } catch (e) {
    console.log(e);
    message.reply("Error: " + e.message);
  }
};
