import { parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    parentPort.once('message', (value) => {
        if (typeof value != 'number') throw new Error('Value should be number');
        const result = nthFibonacci(value);
        parentPort.postMessage(result);
    });
};

sendResult();