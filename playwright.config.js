import { join } from 'path';

export default {
  cacheDir: join(process.cwd(), '.cache', 'playwright'),
};
