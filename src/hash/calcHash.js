import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const calculateHash = async () => {
    const rs = fs.createReadStream(path.join(__dirname ,'./files/fileToCalculateHashFor.txt'))
    let content = '';
    
    rs.on('data', (chunk) => content += chunk.toString());

    rs.on('end', () => {
        const hash = crypto.createHash('sha256').update(content).digest('hex');
        process.stdout.write(`SHA256: ${hash}\n`)
    })
};

await calculateHash();