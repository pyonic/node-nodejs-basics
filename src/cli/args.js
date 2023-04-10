// node args.js --paramOne 1 --paramTwo 2

const parseArgs = () => {
    const args = process.argv.slice(2);
    for(let i = 0; i < args.length; i+=2) {
        console.log(`${args[i].replace('--', '')} is ${args[i + 1]}`);
    }
};

parseArgs();