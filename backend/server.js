const { GoogleGenAI } = require("@google/genai");

require('dotenv').config();
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });


const prompt = 'Generate my resume here are the details : Aniket Shisodia ,Software Developer , Working as a freelance , developerd natours full stack web application to book tours , and a real time chat application using node.js , socter.io , skills - C++ , js , backend develper ,m competative programmer , applying for sde intern roles , won codechef contest 1900 + rating leetcode';


async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    console.log(response.text);
}

main();