import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

import { FS_ERROR_TEXT, MAIN_FILE_PATH } from './constants.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
   const target = path.join(__dirname, `${MAIN_FILE_PATH}/fileToRead.txt`);

    fs.access(target, async (err) => {
        if (err) throw new Error(FS_ERROR_TEXT);
        const readStream = fs.createReadStream(target);
        readStream.on('data', (chunk) => {
            console.log(chunk.toString());
        })
    })
};

await read();