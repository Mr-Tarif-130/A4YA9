const axios = require('axios');

module.exports = {
    config: {
        name: "lyrics",
        aliases: ['lyc', 'song'],
        author: "Hassan",
        version: "1.0",
        shortDescription: "Get the lyrics of a song",
        longDescription: "Retrieve the lyrics of a specified song using the Lyrics API.",
        category: "entertainment",
        guide: {
            vi: "",
            en: ""
        }
    },

    onStart: async function ({ message, args }) {
        if (args.length === 0) {
            return message.reply("Please provide the name of a song to get its lyrics.");
        }

        const song = args.join(' ');
        const url = `https://search-hassan-api.vercel.app/lyrics?query=${encodeURIComponent(song)}`;

        try {
            const response = await axios.get(url);
            const data = response.data;

            if (data.status !== "success" || !data.result.length) {
                return message.reply(`Sorry, no lyrics found for "${song}".`);
            }

            const songData = data.result[0];
            const lyrics = songData.lyrics ? songData.lyrics : "Lyrics not available.";
            const title = songData.full_title;


            const media = Array.isArray(songData.media)
                ? songData.media.map(m => `${m.provider}: ${m.url}`).join('\n')
                : "No media links available.";

            return message.reply(`ðŸŽ¶ Lyrics of "${title}":\n\n${lyrics}\n\nMedia links:\n${media}`);

        } catch (error) {
            console.error('Error fetching lyrics:', error.response ? error.response.data : error.message);
            return message.reply(`Sorry, there was an error fetching the lyrics. Error: ${error.message}`);
        }
    }
}
