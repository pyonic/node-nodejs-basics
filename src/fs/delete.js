import fs from 'node:fs';
import path from 'node:path';
import { FS_ERROR_TEXT, MAIN_FILE_PATH } from './constants.js';

const remove = async () => {
    const target = path.resolve.call(null, `${MAIN_FILE_PATH}/fileToRemove.txt`);

    fs.access(target, async (err) => {
        if (err) throw new Error(FS_ERROR_TEXT);
        await fs.promises.unlink(target);
    })
};

await remove();