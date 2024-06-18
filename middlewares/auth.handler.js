import boom from '@hapi/boom';
import { config } from '../config/config.js';
export function checkApiKey(req, res, next) {
  const apikey = req.headers['api'];
  if (apikey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}


