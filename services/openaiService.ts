// openaiService.ts in the services directory
import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

export const generateRecipe = async (prompt: string, apiKey: string): Promise<string> => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      { prompt, max_tokens: 150 },
      { headers: { 'Authorization': `Bearer ${apiKey}` } }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
};
