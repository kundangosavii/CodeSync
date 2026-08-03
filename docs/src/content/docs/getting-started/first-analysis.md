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
npx @kundan_gosavi/codesync
```

You can also analyze a specific folder:

```bash
codesync ./src
```

---

## What happens next?

When you run the command, Code Analyzer will:

- Scan your project files
- Parse JavaScript/TypeScript code
- Build a dependency graph
- Detect unused files and complexity
- Show short summery of project

---

## Open the dashboard

After analysis completes, you’ll can run:

```bash
codesync dashboard
```

This will opens a dashboard in browser

```text
http://localhost:8000
```

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