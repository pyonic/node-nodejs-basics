import fs from 'node:fs';
import * as url from 'url';
import path from 'node:path';

import { FS_ERROR_TEXT, MAIN_FILE_PATH } from './constants.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
    const filePath = path.join(__dirname, `${MAIN_FILE_PATH}/fresh.txt`);
    const content = 'I am fresh and young';

    fs.access(filePath, fs.constants.R_OK, (err) => {
        if (!err) throw new Error(FS_ERROR_TEXT);

        fs.writeFile(filePath, content, (err, data) => {
            if (err) throw new Error(err)
            process.stdout.write(`${filePath} created successfully\n`)
        });
    
    });

};

await create();