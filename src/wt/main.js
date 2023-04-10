import os from 'node:os';
import path from 'node:path';
import { Worker } from 'node:worker_threads';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

/* Console logs for Error & Exit are optional */

const performCalculations = async () => {
    const coresAmount  = os.cpus().length;
    const workerPromises = []
    let workerDataNum = 10;

    for(let i = 0; i < coresAmount; i++) {
        workerPromises.push(new Promise((resolve, _) => {
                    const worker = new Worker(path.join(__dirname, './worker.js'), { workerData: null });

                    worker.on('message', (value) => {
                        // console.log(`Received value from worker (${i}) for value ${workerDataNum} => ${value}`);
                        resolve({ status: 'success', value })
                    });
                    
                    worker.on('error', (_) => {
                        resolve({ status: 'error', value: null })
                    })
                    
                    worker.on('exit', (code) => {
                        // console.log(`Worker with id: ${i} exited with status code ${code}`);
                    });
                    
                    worker.postMessage(workerDataNum);
                }
            )
        )
        workerDataNum++;
    }

    const worker_results = await Promise.all(workerPromises);

    console.log(`Workers result: ${JSON.stringify(worker_results)}`);
    
    return worker_results;
};

await performCalculations();