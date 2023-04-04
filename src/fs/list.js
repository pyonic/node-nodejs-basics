import fs from 'node:fs';
import path from 'node:path';
import { FS_ERROR_TEXT, MAIN_FILE_PATH } from './constants.js';

const list = async () => {
    const source = path.resolve.call(null, MAIN_FILE_PATH);

    fs.access(source, async (err) => {
        if (err) throw new Error(FS_ERROR_TEXT);
        const files = await fs.promises.readdir(source);
        console.log(`Content: \n ${files.join('\n ')}`);
    })
};

await list();