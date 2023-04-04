import child_process from 'node:child_process';

const spawnChildProcess = async (args = []) => {
    const child = child_process.spawn('node', ['./files/script.js', ...args], {
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
