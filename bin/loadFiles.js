import fs from 'fs';
import path from 'path';
import { __dirname, __filename } from '../config.js';
import {REPOS_DIR} from '../config.js';
import { json } from 'stream/consumers';

export function loadFiles(repoPath){
    let repoName;
    if(repoPath.includes("github.com")) {
        repoName = repoPath.split('/').pop().replace('.git', '');
    }
    else{
        repoName = path.basename(repoPath);
    }

    const targetPath = path.join(REPOS_DIR, repoName);

    return {
        complexity: JSON.parse(fs.readFileSync(path.join(targetPath, 'complexity.json'), 'utf-8')),
        cycle : JSON.parse(fs.readFileSync(path.join(targetPath, 'cycle.json'), 'utf-8')),
    }
}