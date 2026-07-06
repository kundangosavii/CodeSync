import { Command } from 'commander';
import chalk from 'chalk';
import path from 'path';
import { run } from '../index.js';
import { section } from './helper.js';


const program = new Command();

program
    .command('analyze')
    .argument('<repoPath>', 'Path to the repository or GitHub URL')
    .action(async (repoPath) => {
        const result = await run(repoPath);

        console.log(chalk.green("✔ Analysis Complete\n"));
        console.log(chalk.bold.blue(`Found ${result.files.length} files for analysis.\n`));


        section("Codebase Summary");

        console.log(`Total Files: ${result.graphNodesEdges.nodes.length}`);
        console.log(`Entry Points: ${result.insights.EntryPoints.map(ep => path.basename(ep.file)).join(', ')}`);
        console.log(`Cycles Found: ${result.cycle.length}`);

        result.ReadableInsights.forEach((msg, i) => {
            console.log(`${i + 1}. ${msg}`);
        });



    });

program.parse();