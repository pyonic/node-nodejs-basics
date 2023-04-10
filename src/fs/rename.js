import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

import { FS_ERROR_TEXT, MAIN_FILE_PATH } from './constants.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
    
    const absPath = (source) => path.join(__dirname, source);
    
    const source = absPath(`${MAIN_FILE_PATH}/wrongFilename.txt`);
    const target = absPath(`${MAIN_FILE_PATH}/properFilename.md`);
    
    fs.access(source, async (err) => {
        if (err) throw new Error(FS_ERROR_TEXT);
        fs.access(target, async (err) => {
            if (!err) throw new Error(FS_ERROR_TEXT);
            await fs.promises.rename(source, target);
        })
    })
};

await rename();