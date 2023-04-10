import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

import { FS_ERROR_TEXT, MAIN_FILE_PATH } from './constants.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
    const target = path.join(__dirname, `${MAIN_FILE_PATH}/fileToRemove.txt`);

    fs.access(target, async (err) => {
        if (err) throw new Error(FS_ERROR_TEXT);
        await fs.promises.unlink(target);
    });
};

await remove();