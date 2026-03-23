# Worst Server Ever Wiki

This repository contains the public documentation site for the Worst Server Ever wiki.

It is built with VitePress and published from the contents of the `docs/` directory.

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

- `docs/` contains the wiki content and VitePress configuration
- `docs/.vitepress/` contains the site config and theme customizations
- `docs/public/` contains static assets

## Contributing

Contributions should be made through GitHub pull requests.

Do not open pull requests against `main`.

Open pull requests against the `development` branch instead.

If you are updating or creating wiki pages:

- keep content clear and easy to scan
- match the existing page style where possible
- use the markdown guide in `docs/markdown-examples.md` if you need formatting examples

See `docs/contributing.md` for the full contribution guide.
