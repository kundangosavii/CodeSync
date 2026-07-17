---
title: CLI Flags
description: Available flags for customizing CLI output
order: 2
---

# CLI Flags

Flags allow you to customize how Code Analyzer outputs results.

---

## --json

Output results in JSON format instead of formatted CLI output.

### Usage

```bash
code-analyzer analyze ./project --json
```

---

## Where it works

The `--json` flag is supported in:

- `analyze`
- `detail-analysis`
- `complexity`
- `cycles`
- `depth-table`

---

## Example

### Default output

```bash
code-analyzer analyze ./project
```

Shows:

- Formatted summary
- Sections like "Codebase Summary"
- Human-readable output

### JSON output

```bash
code-analyzer analyze ./project --json
```

Returns structured data:

```json
{
  "totalFiles": 120,
  "entryPoints": ["index.js"],
  "cycles": 3,
  "deadFiles": 5
}
```

---

## When to use --json

Use JSON output when:

- Integrating with other tools
- Writing scripts or automation
- Saving results for later analysis

---

## Best practice

- Use **default output** for quick understanding
- Use **`--json`** for programmatic usage

---

## Future flags

More flags may be added to support:

- Filtering results
- Limiting output
- Custom formats
