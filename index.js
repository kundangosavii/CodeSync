import path from "path";
import { __dirname, __filename } from './config.js';
import fs from "node:fs";

import { getAllFiles } from "./src/core/fileLoader.js";
import { parseFile } from "./src/core/fileParser.js";
import { graphBuilder } from "./src/core/graphBuilder.js";
import { generateInsight } from "./src/core/insightEngine.js";
import { generateReadableInsights } from "./src/core/outputEngine.js";
import { cloneRepo } from "./src/core/repoCloner.js";
import { saveGraph, saveInsights, saveReadableInsights, saveGraphInNodeAndEdgesFormat, saveCycle, saveComplexity } from "./src/core/saveInsights.js";
import { transformGraph } from "./src/core/graphTransformation.js";
import { impactAnalysis } from "./src/core/impactAnalysis.js";
import { detectCycles, calculateDepth, calculateComplexity } from "./src/core/dfsAnalysis.js";
import ora from "ora";



async function run(repoUrl) {
  const TARGET_DIR = repoUrl;
  const resolved = path.resolve(TARGET_DIR);

  let repoPath;

  if (repoUrl.includes("github.com")) {
    repoPath = await cloneRepo(TARGET_DIR);
  }
  else {
    repoPath = resolved;
  }


  const files = getAllFiles(repoPath)


  const results = [];

  files.forEach((file) => {
    const parsed = parseFile(file);
    results.push(parsed);
  });


  const graph = graphBuilder(results);

  const insights = generateInsight(graph);

  const ReadableInsights = generateReadableInsights(insights);

  const graphNodesEdges = transformGraph(graph)

  const cycle = detectCycles(graph)
  const depth = calculateDepth(graph)
  const complexity = calculateComplexity(graph, depth, cycle)

  saveGraph(TARGET_DIR, graph);
  saveInsights(TARGET_DIR, insights);
  saveReadableInsights(TARGET_DIR, ReadableInsights);
  saveGraphInNodeAndEdgesFormat(TARGET_DIR, graphNodesEdges);
  saveCycle(TARGET_DIR, cycle);
  saveComplexity(TARGET_DIR, complexity);

  impactAnalysis(TARGET_DIR);


  const registerPath = path.join(__dirname, "repos", "register.json");
  
  const date = new Date();
  const dateString = date.toLocaleString();

  const formattedDate = dateString.split(",")[1].trim();

  const generateUniqeId = () => {
    return TARGET_DIR.split(path.sep).pop() + "_" + formattedDate.replace(/[:\s]/g, "").replace('pm', "");
  }

  const UniqueId = generateUniqeId();
  let repoName;
  if (path.basename(TARGET_DIR).includes(".git")) {
    repoName = path.basename(TARGET_DIR).replace('.git', '');
  }
  else {
    repoName = path.basename(TARGET_DIR);
  }
  const newObj = {
    repoName: repoName,
    UniqueId,
    date: formattedDate,
    analyzedAt: new Date().toISOString()
  }

  let data = [];
  if (fs.existsSync(registerPath)) {
    const content = fs.readFileSync(registerPath, "utf-8");
    data = content ? JSON.parse(content) : [];
  }

  data.push(newObj)

  fs.writeFile(registerPath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error("Error writing to register file:", err);
    } else {
      console.log("Successfully wrote to register file.");
    }
  });


  return {
    files,
    graph,
    insights,
    ReadableInsights,
    cycle,
    depth,
    complexity,
    graphNodesEdges
  };
}

export { run }