# Weld Website

Source for the [Weld](https://weld.cdi-spec.org) project website — the reference
implementation of [CDI](https://jakarta.ee/specifications/cdi/) (Contexts and
Dependency Injection), a Jakarta EE specification.

Weld is a [Commonhaus Foundation](https://www.commonhaus.org/) project.

## Technology

The site is built with [Roq](https://iamroq.dev/), a static site generator based on
[Quarkus](https://quarkus.io/). It is deployed to [GitHub Pages](https://pages.github.com/)
via GitHub Actions.

## Prerequisites

- Java 21+
- Maven 3.9+ (or use the included `mvnw` wrapper)

## Local Development

```bash
./mvnw quarkus:dev
```

The site will be available at `http://localhost:8080` with live reload — edit any
content or template file and the browser refreshes automatically.

## Project Structure

```
content/          Content pages (Markdown/AsciiDoc)
content/posts/    News posts
templates/        Qute templates (layouts and partials)
public/           Static assets (images, CSS, JS)
src/              Quarkus configuration
.github/          GitHub Actions workflows
```

## Adding a News Post

Create a new file in `content/posts/` following the naming convention
`YYYY-MM-DD-slug.asciidoc` (or `.md`) with frontmatter:

```yaml
---
layout: post
title: Your Post Title
author: Your Name
tags: [release]
---
```

Submit a pull request. On merge, the site is rebuilt and deployed automatically.

## Acknowledgments

The visual design and CSS theme are adapted from the
[RESTEasy](https://resteasy.dev/) website ([source](https://github.com/resteasy/resteasy.dev)),
also a Commonhaus Foundation project built with Roq. Used under the Apache License 2.0.
