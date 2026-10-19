import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <path d="M 166 37 L 72 37 A 42 42 0 0 0 72 121 L 128 121" 
        fill="none" 
        stroke="#00AEEF" 
        stroke-width="25" 
        stroke-linecap="round" 
        stroke-linejoin="round" />
  <path d="M 34 163 L 128 163 A 42 42 0 0 0 128 79 L 72 79" 
        fill="none" 
        stroke="#205C8D" 
        stroke-width="25" 
        stroke-linecap="round" 
        stroke-linejoin="round" />
</svg>`;

// Function to create an ICO file from raw PNG buffers
function createIco(pngEntries) {
  const count = pngEntries.length;
  const header = Buffer.alloc(6 + count * 16);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4); // count

  let offset = 6 + count * 16;
  const imageBuffers = [];

  for (let i = 0; i < count; i++) {
    const { buffer, size } = pngEntries[i];
    const entryOffset = 6 + i * 16;
    header.writeUInt8(size >= 256 ? 0 : size, entryOffset + 0); // width
    header.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1); // height
    header.writeUInt8(0, entryOffset + 2); // color count
    header.writeUInt8(0, entryOffset + 3); // reserved
    header.writeUInt16LE(1, entryOffset + 4); // color planes
    header.writeUInt16LE(32, entryOffset + 6); // bits per pixel
    header.writeUInt32LE(buffer.length, entryOffset + 8); // image size
    header.writeUInt32LE(offset, entryOffset + 12); // image offset
    offset += buffer.length;
    imageBuffers.push(buffer);
  }

  return Buffer.concat([header, ...imageBuffers]);
}

async function generateAssets() {
  const svgBuffer = Buffer.from(svgContent);

  // 1. Write SVG files
  fs.writeFileSync('public/images/single.svg', svgContent);
  fs.writeFileSync('public/images/logo.svg', svgContent);
  fs.writeFileSync('public/favicon.svg', svgContent);
  console.log('✓ Generated SVG files');

  // 2. Generate PNGs at 512x512
  const png512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();
  fs.writeFileSync('public/images/single.png', png512);
  fs.writeFileSync('public/images/logo.png', png512);
  fs.writeFileSync('public/icon.png', png512);
  console.log('✓ Generated 512x512 PNG files');

  // 3. Generate multi-resolution favicon.ico (16, 32, 48)
  const [ico16, ico32, ico48] = await Promise.all([
    sharp(svgBuffer).resize(16, 16).png().toBuffer(),
    sharp(svgBuffer).resize(32, 32).png().toBuffer(),
    sharp(svgBuffer).resize(48, 48).png().toBuffer(),
  ]);

  const icoBuffer = createIco([
    { buffer: ico16, size: 16 },
    { buffer: ico32, size: 32 },
    { buffer: ico48, size: 48 },
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('✓ Generated public/favicon.ico');

  // Clean up any temporary files
  if (fs.existsSync('public/images/test_vector.png')) {
    fs.unlinkSync('public/images/test_vector.png');
  }
}

generateAssets().catch((err) => {
  console.error(err);
  process.exit(1);
});
