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

export { getIndirectImpact };