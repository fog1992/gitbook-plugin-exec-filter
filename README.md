# Exec plugin for GitBook

This plugin adds a new filter which executes a command and renders stdout.

## Usage

Add this plugin to your project's `book.json` file:

```json
{
    "plugins": [
        "exec-filter"
    ]
}
```

In this example, the output from `gitbook --version` would be embedded into the markdown document.

```md
{{ "gitbook --version" | exec }}
```

## Use Cases

This was originally written to use the help output from a CLI utility to provide some of the documentation.
