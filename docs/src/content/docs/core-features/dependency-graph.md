---
title: Dependency Graph
description: Code Analyzer builds a visual graph of your codebase to show how files are connected.
order: 1
---

---

## What is a dependency graph?

A dependency graph represents:

- **Files** → nodes  
- **Imports** → connections between nodes  

If one file imports another, they are connected.

---

## Why this matters

In real projects, files are not isolated. A change in one file can affect many others.

Without a graph:
- You manually trace imports  
- You miss hidden dependencies  
- Refactoring becomes risky  

With a graph:
- You see relationships instantly  
- You understand structure at a glance  
- You make safer changes  

---

## Example

If your project looks like this:


- `A` depends on `B`
- `B` depends on `C`

Changing `C` can impact both `B` and `A`.

Code Analyzer visualizes this directly in the dashboard.

---

## How Code Analyzer builds it

During analysis:

1. Parses each file  
2. Extracts import/export statements  
3. Maps relationships between files  
4. Constructs a graph structure  

---

## In the dashboard

You will see:

- Nodes → individual files  
- Edges → import relationships  
- Highlighted paths → dependency chains  

You can:

- Click a node to inspect a file  
- Trace dependencies forward and backward  
- Identify central or critical files  

---

## What to look for

When exploring the graph, focus on:

- Highly connected files (possible bottlenecks)  
- Deep dependency chains  
- Circular dependencies (if any)  

---

## Common use cases

- Understanding unfamiliar codebases  
- Debugging unexpected behavior  
- Refactoring large modules safely  

---

## Next step

Learn how complexity is calculated →