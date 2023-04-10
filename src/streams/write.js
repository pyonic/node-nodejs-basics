import fs from 'node:fs';
import path from 'node:path';
import { Writable } from 'node:stream';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
    
    const writeStream = fs.createWriteStream(path.join(__dirname, './files/fileToWrite.txt'));

    const writableStream = new Writable({
        write(chunk, encoding, callback) {
            writeStream.write(chunk, encoding, callback);
        }
    });

    process.stdin.pipe(writableStream);
};

await write();