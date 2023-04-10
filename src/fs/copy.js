import fs from 'node:fs';
import * as url from 'url';
import path from 'node:path';

import { FILES_COPY_PATH, FS_ERROR_TEXT, MAIN_FILE_PATH } from './constants.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
    const source = path.join(__dirname, MAIN_FILE_PATH);
    const target = path.join(__dirname, FILES_COPY_PATH);
    
    const join = (source, file) => path.join.call(null, source, file);

    fs.access(source, async (err) => {
        if (err) throw new Error(FS_ERROR_TEXT, err);
        fs.access(target, async (err) => {
            if (!err) throw new Error(FS_ERROR_TEXT, err);
            else {
                await fs.promises.mkdir(target);
                const files = await fs.promises.readdir(source);
                files.forEach(async (file)=> {
                    await fs.promises.copyFile(join(source, file), join(target, file))
                })
            }
        })
    })

}
await copy();