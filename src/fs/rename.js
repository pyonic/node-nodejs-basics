import fs from 'node:fs';
import path from 'node:path';
import { FS_ERROR_TEXT, MAIN_FILE_PATH } from './constants.js';

const rename = async () => {
    const source = `${MAIN_FILE_PATH}/wrongFilename.txt`;
    const target = `${MAIN_FILE_PATH}/properFilename.md`;

    const resolve = (source) => path.resolve.call(null, source);
    
    fs.access(resolve(source), async (err) => {
        if (err) throw new Error(FS_ERROR_TEXT);
        fs.access(resolve(target), async (err) => {
            if (!err) throw new Error(FS_ERROR_TEXT);
            await fs.promises.rename(source, target);
        })
    })
};

await rename();