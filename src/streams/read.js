import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const readStream = fs.createReadStream(path.join(__dirname, './files/fileToRead.txt'));
    readStream.on('data', (chunk) => {
        process.stdout.write(`${chunk.toString()} \n`);
    });
};

await read();