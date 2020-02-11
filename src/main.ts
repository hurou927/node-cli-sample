#!/usr/bin/env node
import program from 'commander';
 
(async () => {
    program
        .version("0.0.1", "-v, --version")
        .option("-t, --test", "test option")
        .option('-p, --pizza-type <type>', 'flavour of pizza')
        .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue')
        .parse(process.argv);
    console.log('Hello', program.test);    
})();