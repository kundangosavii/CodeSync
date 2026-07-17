---
title: Installation
description: How to install Code Analyzer
order: 1
---

# Installation

Code Analyzer requires no setup. You can run it instantly using `npx`.

---

## Run the tool

```bash
npx code-analyzer
```

### What happens when you run it?

This will:

- Scan your project directory
- Analyze dependencies and structure
- Detect complexity and unused files
- Launch a local dashboard

---

## Requirements

Make sure your environment meets the following:

- **Node.js** v18 or higher
- A **JavaScript** or **TypeScript** project

---

## Optional: Install globally

If you prefer running the tool without `npx`, install it globally:

```bash
npm install -g code-analyzer
```

Then run:

```bash
code-analyzer
```

---

## Verify installation

After running the command, you should see:

- CLI output indicating analysis has started
- A local dashboard URL (e.g., `http://localhost:3000`)

---

## Troubleshooting

If the tool does not work as expected:

1. Ensure your Node.js version is **18 or higher** (`node -v`).
2. Check if the command executed without errors.
3. Try running again using `npx`.