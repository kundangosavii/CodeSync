import simpleGit from 'simple-git';
import path from 'path';
import fs from 'fs';
import { __dirname, __filename } from '../../config.js';

const git = simpleGit();

async function cloneRepo(repoUrl) {
    const repoName = repoUrl.split('/').pop().replace('.git', '');
    const targetPath = path.join(__dirname, '../../repos', repoName);

    if (fs.existsSync(targetPath)) {
        console.log(`Repo already exists at ${targetPath}, skipping clone.`);
        return targetPath;
    }

    console.log(`Cloning ${repoUrl} into ${targetPath}...`);

    try {
        await git.clone(repoUrl, targetPath);
        console.log('Clone successful!');
        return targetPath;
    } catch (err) {
        console.error('Error cloning repo:', err);
        throw err;
    }
}

export {
    cloneRepo
}