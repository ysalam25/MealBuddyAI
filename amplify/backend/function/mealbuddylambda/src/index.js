const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
import { Configuration, OpenAIApi } from "openai";

require('dotenv').config();
const configuration = new Configuration({
  organization: "org-gpcWN7qQi9eB0X4hBtQiwb76",
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const completion = openai.createCompletion({
  model: "gpt-3.5-turbo",
  messages:[
    {
      "role": "system",
      "content": "You will be provided with a block of text, and your task is to extract a list of keywords from it."
    },
    {
      "role": "user",
      "content": "Black-on-black ware is a 20th- and 21st-century pottery tradition developed by the Puebloan Native American ceramic artists in Northern New Mexico. Traditional reduction-fired blackware has been made for centuries by pueblo artists. Black-on-black ware of the past century is produced with a smooth surface, with the designs applied through selective burnishing or the application of refractory slip. Another style involves carving or incising designs and selectively polishing the raised areas. For generations several families from Kha'po Owingeh and P'ohwhóge Owingeh pueblos have been making black-on-black ware with the techniques passed down from matriarch potters. Artists from other pueblos have also produced black-on-black ware. Several contemporary artists have created works honoring the pottery of their ancestors."
    }
  ],
  max_tokens: 5

});

console.log(completion.data.choices[0].message.content);
/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
