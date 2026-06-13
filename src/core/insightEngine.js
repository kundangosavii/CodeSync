function generateInsight(graph){
    const insights = {
        "Entry Points": [],
        "Unused Files": [],
        "Highly Coupled Files": [],
        "Central Files": []
    };

    for (let file in graph) {
        const node = graph[file];

        const importCount = node.imports.length;
        const importedByCount = node.importedBy.length;

        if (importedByCount === 0) {
            insights["Entry Points"].push(
                {
                    file: file,
                    imports: node.imports,
                }
            );
        }

        if (importCount >= 3) {
            insights["Highly Coupled Files"].push(file);
        }

        if(importedByCount == 0 && importCount == 0 && !file.includes("app") && !file.includes("index")) {  
            insights["Unused Files"].push(file);
        }

        if(importedByCount >= 2) {
            insights["Central Files"].push(
                {
                    file: file,
                    usedBy: importedByCount,
                    importedBy: node.importedBy,
                }
            );
        }

    }

    return insights;

}

export {
    generateInsight
}