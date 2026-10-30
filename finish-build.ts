import { copyFile, rename } from 'node:fs/promises';
await copyFile('dist/client/404/index.html', 'dist/client/404.html');

// Start normalizes encoded hashes before prerendering; rename the output to the static host's decoded path.
await rename('dist/client/tag/c%23', 'dist/client/tag/c#');
