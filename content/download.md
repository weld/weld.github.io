---
layout: page
title: Download
---

# Download Weld

## Jakarta EE Application Servers

The easiest way to use Weld is with a Jakarta EE Application Server. Weld is integrated out of the box in the following servers:

- [WildFly](https://www.wildfly.org/)
- [Eclipse GlassFish](https://glassfish.org/)
- [Open Liberty](https://openliberty.io/)

## Maven Artifacts

All Weld artifacts are published to Maven Central. Below are the key artifacts you may need depending on your deployment scenario.

### CDI API

The Jakarta CDI API specification artifacts.

- [jakarta.cdi-api](https://central.sonatype.com/search?q=g%3Ajakarta.cdi++a%3Ajakarta.cdi-api)

### Weld Core

The CDI reference implementation core module.

- [weld-core-impl](https://central.sonatype.com/search?q=g:org.jboss.weld%20%20a:weld-core-impl)

### Weld Servlet

For deploying Weld in servlet containers (Tomcat, Jetty).

- [weld-servlet-core](https://central.sonatype.com/search?q=g:org.jboss.weld.servlet%20a:weld-servlet-core) — Core module
- [weld-servlet-shaded](https://central.sonatype.com/search?q=g:org.jboss.weld.servlet%20a:weld-servlet-shaded) — Shaded jar with all dependencies

### Weld SE

For using CDI in standalone Java SE applications.

- [weld-se-core](https://central.sonatype.com/search?q=g:org.jboss.weld.se%20a:weld-se-core) — Core module
- [weld-se-shaded](https://central.sonatype.com/search?q=g:org.jboss.weld.se%20a:weld-se-shaded) — Shaded jar with all dependencies

### Weld Lite Extension Translator

Translates CDI Lite (Build Compatible) extensions into CDI Full (Portable) extensions, enabling Build Compatible Extensions to run on CDI Full implementations.

- [weld-lite-extension-translator](https://central.sonatype.com/search?q=g:org.jboss.weld%20a:weld-lite-extension-translator)

### Weld Testing

JUnit 5 extensions for testing CDI applications.

- [GitHub: weld/weld-testing](https://github.com/weld/weld-testing)

### Weld OSGi Bundle

- [weld-osgi-bundle](https://central.sonatype.com/search?q=g:org.jboss.weld%20%20a:weld-osgi-bundle)

## Binary Distributions

Binary distribution table will be added here.
