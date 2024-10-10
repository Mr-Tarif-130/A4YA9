const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  config: {
    name: "xl", 
    aliases: ["xi", "imagegen"], 
    version: "1.0",
    author: "Hassan",
    countDown: 15,
    role: 0,
    shortDescription: "Generate images using the Day-XI API",
    longDescription: "Generate images using the Day-XI API",
    category: "download",
    guide: {
      en: "{pn} prompt"
    }
  },

  onStart: async function ({ api, message, args }) {
    try {
      const prompt = args.join(" ");
      const waitingMessage = await message.reply("Please wait...");

      const response = await axios.get(`https://day-xi-api.vercel.app/xi?prompt=${encodeURIComponent(prompt)}`);

      if (response.status === 200) {
        const imageUrl = response.data.xiResponse[0]; 
        const imgResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'cache', 'generated_image.jpg');
        await fs.outputFile(imgPath, imgResponse.data);
        const imgStream = fs.createReadStream(imgPath);

        await api.unsendMessage(waitingMessage.messageID);

        await message.reply({
          body: "âœ… | Image generated",
          attachment: imgStream
        });
      } else {
        throw new Error("Failed to generate image");
      }
    } catch (error) {
      await message.reply("Image generation failed! Check the prompt or try again later.");
    }
  }
}
