// It's just like Authorization is happenning here 
import OpenAI from 'openai';
import { GPT_API } from './constants';

const openai = new OpenAI({
  apiKey: GPT_API, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});

export default openai;