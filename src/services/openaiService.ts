import axios from 'axios';
import Config from 'react-native-config';

// Extract your API URL and Key from the environment variables or config
const OPENAI_API_URL = Config.API_URL || 'https://api.openai.com/v1/engines/text-davinci-003/completions';
const OPENAI_API_KEY = Config.OPENAI_API_KEY;

// Function to generate recipes based on the input text using OpenAI's API
const generateRecipe = async (inputText: string): Promise<string> => {
  try {
    // Construct the data payload for the POST request
    const dataPayload = {
      model: "text-davinci-003", // Specify the model you're using, could be davinci-codex for code generation
      prompt: inputText,         // The prompt to send to OpenAI
      max_tokens: 100,           // The maximum number of tokens to generate
      // Add other parameters here if needed, for example:
      // temperature: 0.7,       // Controls randomness: lower is more deterministic
      // top_p: 1,               // Controls diversity: smaller values make generations more focused
      // frequency_penalty: 0,   // Discourages repetition
      // presence_penalty: 0,    // Encourages new concepts
    };

    // Make the POST request to the OpenAI API
    const response = await axios.post(OPENAI_API_URL, dataPayload, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json', // Ensure we're sending as JSON
      },
    });

    // Return the first choice's text from the response
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error generating recipe:', error);
    // Enhance error handling by checking for response status
    if ((error as any).response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Data:', (error as any).response.data);
      console.error('Status:', (error as any).response.status);
      console.error('Headers:', (error as any).response.headers);
    } else if ((error as any).request) {
      // The request was made but no response was received
      console.error('Request:', (error as any).request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', (error as any).message);
    }
    throw error; // Re-throw the error for the calling function to handle
  }
};

export { generateRecipe };
