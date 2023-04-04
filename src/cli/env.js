// If you do not have env variables that start with RSS_ -> output will be empty
// You can try to replace RSS_ to USER for example and see results | if you are on Linux

const parseEnv = () => {
    const variables = process.env;

    // See your env vars
    // console.log(variables);

    Object.keys(variables).forEach(variable => {
        if (variable.startsWith('RSS_')) console.log(`${variable}=${variables[variable]}`);
    })
};

parseEnv();