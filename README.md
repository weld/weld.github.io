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
data/             Data files (YAML) exposed to templates via Roq
templates/        Qute templates (layouts and partials)
public/           Static assets (images, CSS, JS)
src/              Quarkus configuration and Java data mappings
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
description: Short summary used in the RSS feed
tags: [release]
---
```

- `description` is used by the RSS feed (`rss.xml`). Keep it concise.
- `tags` are not currently rendered on the site but are preserved for
  future use (e.g. filtering). Common values: `release`, `team`, `tips`,
  `testing`, `integration`. Multiple tags are supported: `[release, jakarta]`.

For release announcements, also add an entry at the top of `data/releases.yaml`
so the release appears in the binary distribution table on the Downloads page:

```yaml
- version: "7.0.1.Final"
  date: "2026-07-15"
  category: "Final"
  cdi: "5.0"
```

For releases tracked in JIRA, also include `versionId: 12345678`. Releases
without `versionId` link to GitHub Releases for their changelog; releases with
`versionId` link to JIRA release notes.

Submit a pull request. On merge, the site is rebuilt and deployed automatically.

## Acknowledgments

The visual design and CSS theme are adapted from the
[RESTEasy](https://resteasy.dev/) website ([source](https://github.com/resteasy/resteasy.dev)),
also a Commonhaus Foundation project built with Roq. Used under the Apache License 2.0.
