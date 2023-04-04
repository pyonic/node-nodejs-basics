import zlib from 'zlib';
import fs from 'fs';
import path from 'path';

const compress = async () => {
    const gzip = zlib.createGzip();

    const readStream = fs.createReadStream(path.resolve('./files/fileToCompress.txt'));
    const writeStream = fs.createWriteStream(path.resolve('./files/archive.gz'));

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();