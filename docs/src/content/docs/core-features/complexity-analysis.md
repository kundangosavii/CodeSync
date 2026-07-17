---
title: Complexity Analysis
description: Identify complex and risky parts of your codebase
order: 2
---

# Complexity Analysis

Code Analyzer evaluates how complex each file is based on its structure and dependencies.

---

## What is complexity?

Complexity represents how difficult a file is to understand, maintain, or modify.

A file becomes complex when it:

- Has many dependencies  
- Is deeply nested in the dependency graph  
- Is connected to many other files  

---

## Why this matters

Complex files are:

- Harder to debug  
- Risky to modify  
- More likely to introduce bugs  

Without identifying them, you waste time guessing where problems exist.

With complexity analysis, you can:

- Focus on high-impact files  
- Refactor intelligently  
- Reduce technical debt  

---

## How Code Analyzer measures complexity

During analysis, the tool:

1. Calculates dependency depth  
2. Counts incoming and outgoing connections  
3. Evaluates how central a file is in the graph  

Each file is assigned a **complexity score**.

---

## In the dashboard

You will see:

- Files ranked by complexity  
- Visual indicators (colors or weights)  
- High-complexity nodes standing out  

---

## What to look for

Focus on:

- Files with very high complexity scores  
- Files connected to many modules  
- Files deeply nested in dependency chains  

These are your **risk zones**.

---

## Example

A file that:

- Imports many modules  
- Is imported by many other files  

→ becomes a **critical and complex node**

Changing it can affect large parts of your codebase.

---

## When to take action

Consider refactoring when:

- A file is too central  
- A module has too many responsibilities  
- Changes frequently break other parts  

---

## Common use cases

- Identifying refactoring candidates  
- Improving maintainability  
- Reducing hidden coupling  

---

## Next step

Understand how changes impact your codebase →