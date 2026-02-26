import sharp from "sharp";

const input = "public/logo-original.png";
const output = "public/logo.png";

const image = sharp(input).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
console.log(`Image: ${width}x${height}, channels: ${channels}`);

const TOLERANCE = 25;

function getPixel(x, y) {
  const idx = (y * width + x) * channels;
  return { r: data[idx], g: data[idx + 1], b: data[idx + 2], a: data[idx + 3] };
}

function colorDiff(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

// Sample corners to get background color
const corner = getPixel(0, 0);
const bgR = corner.r, bgG = corner.g, bgB = corner.b;
console.log(`Background color: rgb(${bgR}, ${bgG}, ${bgB})`);

// Flood-fill from all edges — only removes connected background pixels
const visited = new Uint8Array(width * height);
const toRemove = new Uint8Array(width * height);
const queue = [];

// Seed queue from all 4 edges
for (let x = 0; x < width; x++) {
  queue.push([x, 0]);
  queue.push([x, height - 1]);
}
for (let y = 1; y < height - 1; y++) {
  queue.push([0, y]);
  queue.push([width - 1, y]);
}

let head = 0;
while (head < queue.length) {
  const [x, y] = queue[head++];
  const idx = y * width + x;
  if (visited[idx]) continue;
  visited[idx] = 1;

  const { r, g, b } = getPixel(x, y);
  if (colorDiff(r, g, b, bgR, bgG, bgB) < TOLERANCE) {
    toRemove[idx] = 1;
    // Push neighbours
    if (x > 0)           queue.push([x - 1, y]);
    if (x < width - 1)   queue.push([x + 1, y]);
    if (y > 0)           queue.push([x, y - 1]);
    if (y < height - 1)  queue.push([x, y + 1]);
  }
}

// Apply transparency
const out = Buffer.from(data);
let removed = 0;
for (let i = 0; i < width * height; i++) {
  if (toRemove[i]) {
    out[i * channels + 3] = 0;
    removed++;
  }
}
console.log(`Removed ${removed} background pixels (${Math.round(removed / (width * height) * 100)}%)`);

// Add 10px padding so the logo breathes on transparent bg
await sharp(out, { raw: { width, height, channels } })
  .extend({ top: 10, bottom: 10, left: 10, right: 10, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Saved transparent PNG → ${output}`);
