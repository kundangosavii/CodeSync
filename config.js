import os from "node:os";
import path from "node:path";
import fs from "node:fs";

const BASE_DIR = path.join(os.homedir(), ".codesync");
const REPOS_DIR = path.join(BASE_DIR, "repos");
const OUTPUT_DIR = path.join(BASE_DIR, "analysis");

[BASE_DIR, REPOS_DIR, OUTPUT_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

import { fileURLToPath } from 'url';
import { dirname } from 'path';
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
export {
    BASE_DIR,
    REPOS_DIR,
    OUTPUT_DIR
};