import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import { spawn } from 'node:child_process';
import content from './src/content.json' with {type: 'json'};
import tags from './src/published-tags.json' with {type: 'json'};
const labels = new Set(Object.keys(tags));
const extraTags = [...new Set(content.flatMap(entry => entry.tags || []))].filter(tag => !labels.has(tag));
const pages = [
  ...content.map(entry => ({path: `/experiences/${entry.slug}`})),
  ...Object.values(tags).map(tag => ({path: `/tag/${encodeURIComponent(decodeURIComponent(tag.slug)).replaceAll('%23', '%252523')}`})),
  ...extraTags.map(tag => ({path: `/tag/${encodeURIComponent(tag)}`})),
];
export default defineConfig({
  define: {__BUILD_TIME__: JSON.stringify(new Date().toISOString())},
  plugins: [{name: 'experience-content', configureServer(server) {
    let pending = false, running = false;
    const rebuild = () => { pending = true; if (running) return; running = true;
      const run = () => { pending = false; const child = spawn('bun', ['run', 'content'], {stdio:'inherit', cwd:server.config.root});
        child.on('error', error => {running = false; server.config.logger.error(`Content rebuild failed: ${error.message}`)});
        child.on('exit', code => {if (code !== 0) server.config.logger.error(`Content rebuild failed with exit code ${code}`); if (pending) run(); else running = false});
      }; run();
    };
    server.watcher.on('all', (event, file) => {if (['add','change','unlink'].includes(event) && /[/\\]experiences[/\\].*\.md$/.test(file)) rebuild()});
  }}, tanstackStart({pages, prerender: {enabled:true, crawlLinks:false, failOnError:true}}), react()],
});
