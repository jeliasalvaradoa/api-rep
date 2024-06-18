import { execSync } from 'child_process';
import { join } from 'path';
import { mkdirSync } from 'fs';

const cacheDir = join(process.cwd(), '.cache', 'playwright');

// Crea el directorio de caché si no existe
mkdirSync(cacheDir, { recursive: true });

// Ejecuta el comando de instalación de Playwright
execSync('npx playwright install', { stdio: 'inherit' });
