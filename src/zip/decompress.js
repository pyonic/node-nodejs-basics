import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
    const gzip = zlib.createGunzip();

    const readStream = fs.createReadStream(path.join(__dirname, './files/archive.gz'));
    const writeStream = fs.createWriteStream(path.join(__dirname, './files/fileToCompress_unzipped.txt'));

    readStream.pipe(gzip).pipe(writeStream);
};

await decompress();