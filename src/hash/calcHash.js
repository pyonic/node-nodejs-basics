import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const calculateHash = async () => {
    const rs = fs.createReadStream(path.resolve('./files/fileToCalculateHashFor.txt'))
    let content = '';
    
    rs.on('data', (chunk) => content += chunk.toString());

    rs.on('end', () => {
        const hash = crypto.createHash('sha256').update(content).digest('hex');
        process.stdout.write(`SHA256: ${hash}\n`)
    })
};

await calculateHash();