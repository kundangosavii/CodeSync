---
title: Impact Analysis
description: Understand how changes affect your codebase
order: 3
---

# Impact Analysis

Impact Analysis helps you understand what will be affected when you change a file.

---

## What is impact?

In any codebase, files are connected through dependencies.

If you modify one file, the effect can spread to others.

Impact analysis answers:

> “If I change this file, what else breaks?”

---

## Why this matters

Without impact analysis:

- You guess what might break  
- You miss hidden dependencies  
- Refactoring becomes risky  

With impact analysis:

- You see affected files instantly  
- You make safer changes  
- You avoid unexpected bugs  

---

## How Code Analyzer calculates impact

During analysis, the tool:

1. Builds a dependency graph  
2. Tracks how files depend on each other  
3. Traverses the graph to find affected nodes  

When you select a file, it computes all files that depend on it.

---

## In the dashboard

When you click a file, you will see:

- A list of impacted files  
- Highlighted paths in the graph  
- Direction of impact (what depends on what)  

---

## Example

If your structure is:


- `A` depends on `B`  
- `B` depends on `C`  

If you change `C`:

- `B` is affected  
- `A` is also affected  

So the impact of `C` includes both `B` and `A`.

---

## What to look for

Focus on:

- Files with large impact radius  
- Core modules affecting many others  
- Unexpected dependencies  

These indicate **critical parts of your system**.

---

## When to use impact analysis

- Before refactoring a file  
- When debugging unexpected behavior  
- When working in unfamiliar codebases  

---

## Best practice

Before making changes:

1. Select the file in the dashboard  
2. Check its impact  
3. Review affected modules  

This reduces the risk of breaking your system.

---

## Common use cases

- Safe refactoring  
- Dependency tracking  
- Risk assessment before changes  

---

## Next step

Explore CLI commands and advanced usage →