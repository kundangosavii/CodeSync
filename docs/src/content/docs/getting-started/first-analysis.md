---
title: First Analysis
description: Run your first codebase analysis
order: 2
---

# First Analysis

Now that Code Analyzer is installed, let’s run your first analysis.

---

## Run the command

```bash
npx code-analyzer
```

You can also analyze a specific folder:

```bash
code-analyzer ./src
```

---

## What happens next?

When you run the command, Code Analyzer will:

- Scan your project files
- Parse JavaScript/TypeScript code
- Build a dependency graph
- Detect unused files and complexity
- Start a local dashboard

---

## Open the dashboard

After analysis completes, you’ll see a URL like:

```text
http://localhost:3000
```

Open it in your browser.

---

## What you’ll see

### Dependency Graph
- Each file is a node
- Imports are connections
- Visualize how your code is structured

### Impact Analysis
- Click a file to see what it affects
- Understand ripple effects before changes

### Complexity Insights
- Identify deeply connected or risky files
- Focus on areas that matter

---

## Try this

To understand your codebase better:

- Click on a core file (like `index.js` or `App.tsx`)
- Follow its dependencies
- Identify heavily connected modules

---

## Common mistakes

- Running outside project root
- Analyzing empty or invalid directories
- Ignoring dashboard (this is where real value is)