import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.glb': 'model/gltf-binary',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
};

const server = http.createServer(async (req, res) => {
  try {
    const cleanUrl = (req.url || '/').split('?')[0];
    const rel = cleanUrl === '/' ? 'index.html' : cleanUrl.replace(/^\/+/, '');
    const filePath = path.resolve(root, rel);
    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }
    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Serving d:\\6Q at http://127.0.0.1:${port}`);
});
