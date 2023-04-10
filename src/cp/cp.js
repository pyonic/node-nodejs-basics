import child_process from 'node:child_process';
import * as url from 'url';
import path from 'node:path';

const spawnChildProcess = async (args = []) => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    
    const child = child_process.spawn('node', [path.join( __dirname, 'files/script.js'), ...args], {
        stdio: ['pipe', 'pipe', 'inherit', 'ipc']
    });

    process.stdin.on('data', (data) => {
        child.stdin.write(data);
    });

    child.stdout.on('data', (data) => {
        process.stdout.write(data);
    });

    child.on('exit', process.exit);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['Argument 1']);
