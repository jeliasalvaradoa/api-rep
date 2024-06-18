//require('dotenv').config();
import "dotenv/config";

export const config = {
  apiKey: process.env.API_KEY,
  url: process.env.URL,
  selector: process.env.SELECTOR,
  selector_part1: process.env.SELECTOR_PART1,
  selector_part2: process.env.SELECTOR_PART2,
  selector_part3: process.env.SELECTOR_PART3,
  selector_part4: process.env.SELECTOR_PART4,
};
