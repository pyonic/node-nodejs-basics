import fs from 'node:fs';
import path from 'node:path';
import { FS_ERROR_TEXT, MAIN_FILE_PATH } from './constants.js';

const read = async () => {
   const target = path.resolve(`${MAIN_FILE_PATH}/fileToRead.txt`);

    fs.access(target, async (err) => {
        if (err) throw new Error(FS_ERROR_TEXT);
        const readStream = fs.createReadStream(target);
        readStream.on('data', (chunk) => {
            console.log(chunk.toString());
        })
    })
};

await read();