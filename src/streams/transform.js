import stream from 'node:stream';

const transform = async () => {
    const reverseStream = new stream.Transform({
        transform(chunk, _, callback) {
          const reversed = chunk.toString().split('').reverse().join('') + '\n';
          callback(null, reversed);
        }
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();