import fs from 'node:fs';
import path from 'node:path';
import { Writable } from 'node:stream';

const write = async () => {
    
    const writeStream = fs.createWriteStream(path.resolve('./files/fileToWrite.txt'));

    const writableStream = new Writable({
        write(chunk, encoding, callback) {
            writeStream.write(chunk, encoding, callback);
        }
    });

    process.stdin.pipe(writableStream);
};

await write();