import fs from 'node:fs'
import path from 'path'
import { __dirname, __filename } from '../../config.js';


function saveGraph(TARGET_DIR, graph) {
    const basePath = __dirname

    const newRepo = path.join(basePath, 'repos')
    console.log(newRepo)

    try {
        const repoPath = path.join(newRepo, path.basename(TARGET_DIR))
        const fullRepoPath = path.join(repoPath, 'graph.json')

        if(!fs.existsSync(repoPath)) {
            fs.mkdir(repoPath, { recursive: true }, (err) => {
            if (err) {
                console.error('Error creating directory:', err);
            } else {
                console.log('Directory created successfully!');
            }});
        }else{
            console.log('Directory already exists. Using existing directory...');
        }
        if(fs.existsSync(fullRepoPath)) {
            console.log('File already exists. Overwriting...');
        }else {
            fs.writeFile(fullRepoPath, JSON.stringify(graph, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Results saved successfully!');
            }
        });
        }
        
        } catch (error) {
            console.error('Error saving results:', error);
        }

    }



export { saveGraph }