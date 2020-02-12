#!/usr/bin/env node
import program from 'commander';
import axios from "axios"; 


interface ServerResponse {
  data: ServerData
}
interface Headers {
    'Accept'?: string;
    'Accept-Encoding'?: string;
    'Accept-Language'?: string;
    'Host'?: string;
    'Sec-Fetch-Mode'?: string;
    'Sec-Fetch-Site'?: string;
    'Upgrade-Insecure-Requests'?: string;
    'User-Agent'?: string;
    'X-Amzn-Trace-Id'?: string;
}

interface ServerData {
    headers?: Headers;
    origin?: string;
    url?: string;
}


(async () => {
    // program
    //     .version("0.0.1", "-v, --version")
    //     .option("-t, --test", "test option")
    //     .option('-p, --pizza-type <type>', 'flavour of pizza')
    //     .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue')
    //     .parse(process.argv);

    program
        .command('cm0')
        .option("-a, --aaa", "AAA")
        .option("-b, --bbb", "BBB")
        .action((v, cmdObj) => {
            console.log("cm0", v, cmdObj);
        })

    program
        .command('get <type>')
        .option("-c, --ccc", "CCC")
        .option("-d, --ddd", "DDD")
        .action(async (v, cmdObj) => {
            console.log("cm1", v, cmdObj.ccc, cmdObj.ddd);
            const res: ServerResponse = await axios.request<void, ServerResponse>({
                method: 'get',
                url: 'https://httpbin.org/get',
            });
            console.log(res.data);
        })

    console.log('start!')
    await program.parseAsync(process.argv);
    

    console.log('finish!')
})();
