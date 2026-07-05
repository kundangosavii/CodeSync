import { Command } from 'commander';
import chalk from 'chalk';
import { run } from '../index.js';


const program = new Command();

program
    .command('analyze')
    .argument('<repoPath>', 'Path to the repository or GitHub URL')
    .action(async (repoPath) => {
        const result = await run(repoPath);

        console.log(chalk.green("✔ Analysis Complete\n"));

        result.ReadableInsights.forEach((msg, i) => {
            console.log(`${i + 1}. ${msg}`);
        });

        

    });

program.parse();