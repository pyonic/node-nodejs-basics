import zlib from 'zlib';
import fs from 'fs';
import path from 'path';

const decompress = async () => {
    const gzip = zlib.createGunzip();

    const readStream = fs.createReadStream(path.resolve('./files/archive.gz'));
    const writeStream = fs.createWriteStream(path.resolve('./files/fileToCompress_unzipped.txt'));

    readStream.pipe(gzip).pipe(writeStream);
};

await decompress();