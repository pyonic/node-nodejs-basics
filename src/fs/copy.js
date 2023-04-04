import fs from 'node:fs';
import path from 'node:path';

import { FILES_COPY_PATH, FS_ERROR_TEXT, MAIN_FILE_PATH } from './constants.js';

const copy = async () => {
    const source = path.resolve(MAIN_FILE_PATH);
    const target = path.resolve(FILES_COPY_PATH);
    
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