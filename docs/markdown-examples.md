# Markdown Guide

This page is a self-contained reference for the markdown features used in this wiki.

Use it when writing or editing pages in `docs/`.

[[toc]]

## Basic Headings

Use headings to break pages into clear sections.

**Input**

```md
# Main Title
## Section Title
### Smaller Section
```

**Output**

# Main Title
## Section Title
### Smaller Section

## Custom Heading Anchors

You can give a heading a custom anchor if you want a cleaner link target.

**Input**

```md
## Bedrock Setup {#bedrock-setup}
```

**Output**

## Bedrock Setup {#bedrock-setup}

You can then link to it with:

```md
[Jump to Bedrock Setup](#bedrock-setup)
```

## Internal and External Links

Internal links should usually point to other wiki pages. External links open in a new tab.

**Input**

```md
[Home](/)
[General Rules](/servers/general/rules)
[How to Join on Console](/servers/general/console)
[Discord](https://discord.gg/38E7gFPfgP)
```

**Output**

[Home](/)
[General Rules](/servers/general/rules)
[How to Join on Console](/servers/general/console)
[Discord](https://discord.gg/38E7gFPfgP)

## Lists

Use numbered lists for steps and bullet lists for grouped information.

**Input**

```md
1. Open Minecraft.
2. Go to `Multiplayer`.
3. Add the server address.

- Survival has an economy.
- Creative is focused on building.
- Oneblock has phased progression.
```

**Output**

1. Open Minecraft.
2. Go to `Multiplayer`.
3. Add the server address.

- Survival has an economy.
- Creative is focused on building.
- Oneblock has phased progression.

## Tables

Tables are useful for commands, ports, versions, or quick comparisons.

**Input**

```md
| Edition | Address                     | Port  |
| ------- | --------------------------- | ----: |
| Java    | `play.worstserverever.com`  |   n/a |
| Bedrock | `play.worstserverever.com`  | 19132 |
```

**Output**

| Edition | Address                     | Port  |
| ------- | --------------------------- | ----: |
| Java    | `play.worstserverever.com`  |   n/a |
| Bedrock | `play.worstserverever.com`  | 19132 |

## Code Blocks

Wrap commands, config, or examples in fenced code blocks. Add a language after the opening backticks when possible.

**Input**

````md
```text
/spawn
/warp shop
```

```json
{
  "server": "survival"
}
```
````

**Output**

```text
/spawn
/warp shop
```

```json
{
  "server": "survival"
}
```

## Syntax Highlighting and Line Highlighting

VitePress supports syntax highlighting and highlighted lines inside code blocks.

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

You can also highlight multiple lines or ranges:

````md
```js{1,4,6-8}
export default {
  data () {
    return {
      msg: `Highlighted!
      This line is normal,
      but these lines stand out.`,
      motd: 'Worst Server Ever',
      lorem: 'ipsum'
    }
  }
}
```
````

## Focus, Diffs, Errors, and Warnings in Code

These markers are useful when explaining changes in examples.

**Input**

````md
```js
export default {
  data () {
    return {
      oldValue: 'Removed' // [!code --]
      newValue: 'Added' // [!code ++]
      important: true // [!code focus]
      warning: 'Check this line' // [!code warning]
      broken: false // [!code error]
    }
  }
}
```
````

**Output**

```js
export default {
  data () {
    return {
      oldValue: 'Removed' // [!code --]
      newValue: 'Added' // [!code ++]
      important: true // [!code focus]
      warning: 'Check this line' // [!code warning]
      broken: false // [!code error]
    }
  }
}
```

## Code Groups

Use code groups when you want to show more than one version of the same example.

**Input**

````md
::: code-group

```md [Link Version]
[Server Rules](/servers/general/rules)
```

```md [Plain Text Version]
Server Rules: `/servers/general/rules`
```

:::
````

**Output**

::: code-group

```md [Link Version]
[Server Rules](/servers/general/rules)
```

```md [Plain Text Version]
Server Rules: `/servers/general/rules`
```

:::

## Table of Contents

For longer pages, add a table of contents near the top.

**Input**

```md
[[toc]]
```

**Output**

The table of contents for this page appears near the top.

## Custom Containers

Containers are useful for notes, tips, warnings, and expandable details.

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## Custom Container Titles

You can give containers custom titles.

**Input**

```md
::: danger Read This First
Do not open pull requests against `main`.
:::

::: details Click to See Example
Use the `development` branch as the pull request target.
:::
```

**Output**

::: danger Read This First
Do not open pull requests against `main`.
:::

::: details Click to See Example
Use the `development` branch as the pull request target.
:::

## GitHub-Style Alerts

If you prefer GitHub alert syntax, VitePress supports that too.

**Input**

```md
> [!NOTE]
> Useful background information for contributors.

> [!TIP]
> Small advice that helps avoid mistakes.

> [!IMPORTANT]
> This step is required.

> [!WARNING]
> This may cause problems if ignored.

> [!CAUTION]
> This has a likely negative outcome.
```

**Output**

> [!NOTE]
> Useful background information for contributors.

> [!TIP]
> Small advice that helps avoid mistakes.

> [!IMPORTANT]
> This step is required.

> [!WARNING]
> This may cause problems if ignored.

> [!CAUTION]
> This has a likely negative outcome.

## Frontmatter

Most normal wiki pages do not need much frontmatter, but it is supported.

**Input**

```md
---
title: Survival Guide
---
```

## Quick Writing Advice

- Keep sections short and specific.
- Prefer internal links to other wiki pages when they already exist.
- Use tables for structured data and lists for steps.
- Use callouts sparingly so important notes still stand out.
- Preview pages if you make large formatting changes.
