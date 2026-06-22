function getIndirectImpact(graphJson, startfile) {
    const visited = new Set();
    const indirect = new Set();

    function dfs(file) {
        const dependents = graphJson[file]?.importedBy || [];

        for (const dep of dependents) {
            if (!visited.has(dep)) {
                visited.add(dep);
                indirect.add(dep);
                dfs(dep);
            }
        }
    }

    visited.add(startfile); // prevent self-loop
    dfs(startfile);

    const direct = graphJson[startfile]?.importedBy || [];

    const indirects = Array.from(indirect).filter(
        file => !direct.includes(file)
    );

    return [indirects, direct];
}

function detectCycles(graph) {
  const visited = new Set();
  const recStack = new Set();
  const cycles = [];

  function dfs(node, path) {
    if (recStack.has(node)) {
      // cycle found
      const cycleStartIndex = path.indexOf(node);
      const cycle = path.slice(cycleStartIndex);
      cycles.push([...cycle, node]); // close loop
      return;
    }

    if (visited.has(node)) return;

    visited.add(node);
    recStack.add(node);

    const neighbors = graph[node]?.imports || [];

    for (const neighbor of neighbors) {
      dfs(neighbor, [...path, node]);
    }

    recStack.delete(node);
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node, []);
    }
  }

  return cycles;
}

export { getIndirectImpact, detectCycles };