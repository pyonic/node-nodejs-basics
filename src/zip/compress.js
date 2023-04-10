import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
    const gzip = zlib.createGzip();

    const readStream = fs.createReadStream(path.join(__dirname, './files/fileToCompress.txt'));
    const writeStream = fs.createWriteStream(path.join(__dirname, './files/archive.gz'));

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();