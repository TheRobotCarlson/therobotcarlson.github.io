import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const names = ['megan_brian_pitch_sm_2.jpg','mirrorcube.png','south_suburban_humane.jpg','sec_pitch.jpeg','guy_adami_2.jpg','nootrax.jpg','abu_simbel.jpg','mexico.jpg'];
const result: Record<string, {src: string; srcSet: string; width: number; height: number}> = {};
await mkdir('public/optimized', {recursive: true});
for (const name of names) {
  const source = `public/extracurricular/${name}`;
  const {width, height} = await sharp(source).metadata();
  if (!width || !height) throw new Error(`Missing dimensions for ${source}`);
  const widths = [...new Set([640, 960, 1280, 1920, 2560].filter(n => n < width).concat(width))];
  const base = name.replace(/\.[^.]+$/, '');
  for (const size of widths) {
    const output = `public/optimized/${base}-${size}.webp`;
    const file = Bun.file(output);
    if (!await file.exists() || file.lastModified < Bun.file(source).lastModified) {
      await sharp(source).rotate().resize({width:size, withoutEnlargement:true}).webp({quality:90, effort:5}).toFile(output);
    }
  }
  result[name] = {src: `/optimized/${base}-${width}.webp`, srcSet: widths.map(size => `/optimized/${base}-${size}.webp ${size}w`).join(', '), width, height};
}
await writeFile('src/images.json', JSON.stringify(result, null, 2));
console.log(`Prepared responsive variants for ${names.length} images`);
