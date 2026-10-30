import { resolve, extname } from 'node:path';
import { stat } from 'node:fs/promises';
const root = resolve('dist/client');
const types: Record<string,string> = {'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.svg':'image/svg+xml'};
Bun.serve({port: 4174, fetch: async req => {
  const url = new URL(req.url);
  let pathname: string;
  try { pathname = decodeURIComponent(url.pathname); } catch { return new Response('Bad request', {status:400}); }
  const candidate = resolve(root, `.${pathname}`);
  if (candidate !== root && !candidate.startsWith(root + '/')) return new Response('Forbidden', {status:403});
  let file = Bun.file(candidate);
  const isDirectory = await stat(candidate).then(info => info.isDirectory()).catch(() => false);
  if (isDirectory) file = Bun.file(resolve(candidate, 'index.html'));
  if (!await file.exists()) return new Response(Bun.file(`${root}/404.html`), {status:404, headers:{'Content-Type':types['.html']}});
  return new Response(file, {headers:{'Content-Type':types[extname(file.name || '')] || file.type}});
}});
console.log('Static site at http://localhost:4174/');
