!cmd install info.js const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "info",
		author: "RAHAT 🤡",
		role: 0,
		shortDescription: "info and my owner the cmd",
		longDescription: "",
		category: "admin",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const rahatInfo = {
				botname: '𝙼𝚂𝚃~ᴹᴬᵞᴬ~𝙱𝙾𝚃~Ұ₮',
				prefix: '!',
				owner: 'Ꮇʀᵀᴬᴿᴵᶠ~Ұ₮',
				age: 'Male',
				tiktok: 'md.tarif0196',
				whatsapp: '01615796682',
				relationship: 'single',
				bio: 'I Love my mather',
				messenger: 'https://m.me/Mr.Tarif.Yt.130'

}

			const bold = 'https://i.imgur.com/pOIurxH.jpeg';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const imgResponse = await axios.get(bold, { responseType: 'arraybuffer' });
			const imgPath = path.join(tmpFolderPath, 'owner_img.jpeg');

			fs.writeFileSync(imgPath, Buffer.from(imgResponse.data, 'binary'));

			const response = `
• Bot & Owner Info
╰‣ Bot Name: ${rahatInfo.botname}
╰‣ Bot Prefix: ${rahatInfo.prefix}
╰‣ Owner: ${rahatInfo.owner}
╰‣ Age: ${rahatInfo.age}
╰‣ Tiktok: ${rahatInfo.tiktok}
╰‣ Whatsapp: ${rahatInfo.whatsapp}
╰‣ relationship: ${rahatInfo.relationship}
╰‣ bio: ${rahatInfo.bio}
╰‣ Messenger: ${rahatInfo.messenger}
╰‣ Instagram: ${rahatInfo.Instagram}`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(imgPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(imgPath);

			api.setMessageReaction('🤡', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ownerinfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};
