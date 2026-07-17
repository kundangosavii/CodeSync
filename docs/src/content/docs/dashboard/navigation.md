---
title: Dashboard Navigation
description: Learn how to interact with the dashboard effectively
order: 2
---

# Dashboard Navigation

The dashboard is interactive. To get real value, you need to actively explore your codebase.

---

## Selecting a file

Click on any node in the graph.

### What happens

- The selected node is highlighted  
- Connected nodes become visible  
- Insights panel updates instantly  

---

## Understanding connections

Each connection represents an import relationship.

- Outgoing edges → files this file imports  
- Incoming edges → files that depend on this file  

---

## Exploring dependencies

To trace dependencies:

1. Click a file  
2. Follow its connections  
3. Move deeper into the graph  

This helps you understand how data flows through your codebase.

---

## Using the sidebar

The sidebar helps you navigate quickly.

### You can:

- Select files without using the graph  
- Jump directly to important modules  
- Explore project structure  

---

## Reading the insights panel

When a file is selected, the right panel updates.

### You will see:

- Impacted files  
- Complexity details  
- Dependency relationships  

---

## Practical workflow

Use this simple workflow:

1. Start with an entry file (`index.js`, `App.tsx`)  
2. Click and explore its dependencies  
3. Identify critical or highly connected files  
4. Check their impact and complexity  

---

## What to avoid

- Clicking randomly without a goal  
- Ignoring dependency direction  
- Looking at graph without using insights  

---

## Pro tips

- Start from entry points  
- Focus on highly connected nodes  
- Use impact analysis before making changes  

---

## Next step

Learn how to configure Code Analyzer for your needs →