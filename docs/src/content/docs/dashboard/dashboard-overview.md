---
title: Dashboard Overview
description: Understand the Code Analyzer dashboard interface
order: 1
---

# Dashboard Overview

The dashboard is where you explore and understand your codebase visually.

After running:

```bash
code-analyzer dashboard
```

The dashboard will open in your browser.

---

## What you’re looking at

The interface is divided into three main sections:

### 1. Dependency Graph (Center)
This is the core of the dashboard.

* Each node represents a file
* Each edge represents an import relationship

**What you can do:**
* Click on any node to inspect a file
* Trace dependencies visually
* Identify highly connected modules

### 2. Sidebar (Left)
The sidebar provides navigation and structure.

**Contains:**
* List of files or modules
* Entry points
* Key sections of your codebase

**Use it to:**
* Quickly jump to a file
* Explore project structure

### 3. Insights Panel (Right)
Displays detailed information about the selected file.

**Shows:**
* Impact analysis (affected files)
* Complexity details
* Dependency relationships

---

## How to use the dashboard

Start with a simple flow:

1. Open the dashboard
2. Click on a core file (e.g., `index.js`, `App.tsx`)
3. Observe its connections
4. Check impact and complexity

---

## What to look for

Focus on:

* **Highly connected nodes** (central files)
* **Deep dependency chains**
* **Unexpected connections**

These reveal how your codebase actually behaves.

---

## Common mistakes

* Just looking at the graph without interacting
* Ignoring the insights panel
* Not exploring different nodes

---

## Best practice

Use the dashboard before making changes:

1. Select a file
2. Check its impact
3. Understand dependencies

This helps prevent breaking your codebase.