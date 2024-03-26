import axios from 'axios';
import Config from 'react-native-config';
import { API_URL, OPENAI_API_KEY } from '@env';

require('dotenv').config();

console.log(process.env.MY_ENV_VARIABLE);

const apiKey = Config.OPENAI_API_KEY;
// const OPENAI_API_URL = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

// export const generateRecipe = async (prompt: string): Promise<string> => {
//   try {
//     const response = await axios.post(
//       OPENAI_API_URL,
//       { prompt, max_tokens: 150 },
//       { headers: { 'Authorization': `Bearer ${Config.OPENAI_API_KEY}` } }
//     );
//     return response.data.choices[0].text;
//   } catch (error) {
//     console.error('Error calling OpenAI API:', error);
//     throw error;
//   }
// };


const generateRecipe = async (inputText: string) => {
  try {
    const response = await axios.post(
      `https://api.openai.com/v1/completions`,
      {
        model: "text-davinci-003", // or any other suitable model
        prompt: inputText,
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error generating recipe:', error);
    throw error;
  }
};

export { generateRecipe };

