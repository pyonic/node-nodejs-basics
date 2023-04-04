import fs from 'fs';
import path from 'path';

const read = async () => {
    const readStream = fs.createReadStream(path.resolve('./files/fileToRead.txt'));
    readStream.on('data', (chunk) => {
        process.stdout.write(`${chunk.toString()} \n`);
    });
};

await read();