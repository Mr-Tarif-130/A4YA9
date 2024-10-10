const axios = require('axios');

module.exports = {
    config: {
        name: "pass",
        aliases: ['password', 'genpass'],
        author: "Hassan",
        version: "1.0",
        shortDescription: "Generate a random password",
        longDescription: "Retrieve a randomly generated password.",
        category: "utility",
        guide: {
            vi: "",
            en: ""
        }
    },

    onStart: async function ({ message, args }) {
        try {
            let length = args[0] || 5;  

            length = Math.min(Math.max(length, 1), 30);  

            const url = `https://h-paswad-api.vercel.app/generate-password?length=${length}`;
            
            const response = await axios.get(url);
            const password = response.data.random_password;

            return message.reply(`ðŸ”‘ Here's your generated password:\n\n"${password}"`);
        } catch (error) {
            console.error(error);
            return message.reply("ðŸ§² Couldn't fetch a password at the moment.");
        }
    }
}
