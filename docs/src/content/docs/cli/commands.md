---
title: CLI Commands
description: Available commands in Code Analyzer CLI
order: 1
---

## analyze

Analyze a codebase and generate insights.

```bash
codesync analyze <repoPath>
```

### Example

```bash
codesync analyze ./project
```

### Options

* `--json` → Output results in JSON format

### What it does

* Scans all files
* Builds dependency graph
* Detects cycles and unused files
* Calculates complexity
* Displays summary in CLI

---

## detail-analysis

Run a detailed analysis with extended output.

```bash
codesync detail-analysis <repoPath>
```

### Example

```bash
codesync detail-analysis ./project
```

### Options

* `--json` → Output full analysis as JSON

### What it does

* Everything from `analyze`
* Shows cycles in detail
* Displays depth and complexity table
* Provides full structured output

---

## dashboard

Start the interactive dashboard.

```bash
codesync dashboard
```

### What it does

* Starts backend server
* Starts frontend dashboard
* Opens browser automatically

### Output

Dashboard available at: `http://localhost:5173`

---

## complexity

Analyze complexity scores of files.

```bash
codesync complexity <repoPath>
```

### Example

```bash
codesync complexity ./project
```

### Options

* `--json` → Output JSON

### Output

* List of files
* Complexity score for each file

---

## cycles

Detect circular dependencies.

```bash
codesync cycles <repoPath>
```

### Example

```bash
codesync cycles ./project
```

### Options

* `--json` → Output JSON

### Output

* List of cycles
* Files involved in each cycle

---

## depth-table

Generate depth and dependency table.

```bash
codesync depth-table <repoPath>
```

### Example

```bash
codesync depth-table ./project
```

### Options

* `--json` → Output JSON

### Output

* File name
* Complexity score
* Dependency depth
* Import relationships

---

## Common Workflow

Typical usage flow:

```bash
codesync analyze ./project
codesync dashboard
```

Or for deeper inspection:

```bash
codesync detail-analysis ./project
codesync cycles ./project
codesync complexity ./project
```

> **Notes:**
> - Always run `analyze` before commands like `cycles`, `complexity`, or `depth-table`.
> - These commands rely on previously generated data.
