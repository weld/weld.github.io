---
layout: page
title: Weld
---

# Weld — CDI Reference Implementation for the Java Platform

Weld is the reference implementation of [CDI](https://jakarta.ee/specifications/cdi/) (Contexts and Dependency Injection), the Jakarta EE standard for dependency injection and contextual lifecycle management in Java applications.

## Key Highlights

- **Jakarta EE application servers** — Weld is integrated into [WildFly](https://www.wildfly.org/), [Eclipse GlassFish](https://glassfish.org/), and [Open Liberty](https://openliberty.io/)
- **Servlet containers** — use Weld with [Apache Tomcat](https://tomcat.apache.org/) and [Eclipse Jetty](https://jetty.org/)
- **Java SE** — run Weld in standalone Java SE applications with no container required
- **Commonhaus Foundation** — Weld is now part of the [Commonhaus Foundation](https://www.commonhaus.org/), an open-source foundation dedicated to long-term stewardship of community-driven projects

## Quick Links

- [Download](/download) — get Weld artifacts and distributions
- [Documentation](/documentation) — reference guides and FAQ
- [Contribute](/contribute) — report bugs, contribute code, get in touch

## Latest News

{#for post in site.collections.posts}
{#if post_count <= 5}
- **[{post.title}]({post.url})** — {post.date.format('yyyy-MM-dd')}
{/if}
{/for}

[View all news &raquo;](/news)
