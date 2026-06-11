---
layout: get-started
title: Get Started
aliases: [/download, /dist]
---

# Get Started

Weld is the reference implementation of [Jakarta CDI](https://jakarta.ee/specifications/cdi/) (Contexts and Dependency Injection).
It is integrated into most Jakarta EE application servers and can also be used standalone.
Choose your deployment scenario below.

<div class="get-started-bom-callout">
  <h4><i class="fas fa-cube" aria-hidden="true"></i> Version Management</h4>
  <p>Import the Weld BOM to manage all artifact versions in one place:</p>

  <pre><code>&lt;dependencyManagement&gt;
  &lt;dependencies&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.jboss.weld&lt;/groupId&gt;
      &lt;artifactId&gt;weld-core-bom&lt;/artifactId&gt;
      &lt;version&gt;$\{weld.version}&lt;/version&gt;
      &lt;type&gt;pom&lt;/type&gt;
      &lt;scope&gt;import&lt;/scope&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;</code></pre>
</div>

## <i class="fas fa-server" aria-hidden="true"></i> Jakarta EE Application Server

Weld is integrated into most Jakarta EE application servers as the CDI implementation.
No extra dependencies needed — just deploy your application and CDI works out of the box.

<div class="mb-3">
  <a href="https://www.wildfly.org/" class="btn btn-outline-primary btn-sm me-1" target="_blank" rel="noopener noreferrer">WildFly <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
  <a href="https://www.redhat.com/en/technologies/jboss-middleware/application-platform" class="btn btn-outline-primary btn-sm me-1" target="_blank" rel="noopener noreferrer">JBoss EAP <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
  <a href="https://glassfish.org/" class="btn btn-outline-primary btn-sm me-1" target="_blank" rel="noopener noreferrer">Eclipse GlassFish <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
  <a href="https://www.payara.fish/" class="btn btn-outline-primary btn-sm me-1" target="_blank" rel="noopener noreferrer">Payara <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
  <a href="https://openliberty.io/" class="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">Open Liberty <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
</div>

<div class="mb-3">
  <a href="https://docs.jboss.org/weld/reference/latest/en-US/html_single/#gettingstarted" class="btn btn-outline-secondary btn-sm me-1" target="_blank" rel="noopener noreferrer"><i class="fas fa-book" aria-hidden="true"></i> Reference Guide</a>
  <a href="https://github.com/wildfly/quickstart/tree/main/numberguess" class="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer"><i class="fas fa-code" aria-hidden="true"></i> WildFly CDI Quickstart</a>
</div>

## <i class="fas fa-plug" aria-hidden="true"></i> Servlet Container

For Tomcat, Jetty, or other servlet containers. Choose the shaded jar (all dependencies included) or the core module if you prefer to manage transitive dependencies yourself.

<div class="row g-3 mb-3">
  <div class="col-md-6">
    <div class="get-started-dep-label">Shaded (recommended)</div>
    <pre><code>&lt;dependency&gt;
  &lt;groupId&gt;org.jboss.weld.servlet&lt;/groupId&gt;
  &lt;artifactId&gt;weld-servlet-shaded&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>
  </div>
  <div class="col-md-6">
    <div class="get-started-dep-label">Core</div>
    <pre><code>&lt;dependency&gt;
  &lt;groupId&gt;org.jboss.weld.servlet&lt;/groupId&gt;
  &lt;artifactId&gt;weld-servlet-core&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>
  </div>
</div>

<div class="mb-3">
  <a href="https://docs.jboss.org/weld/reference/latest/en-US/html_single/#weld-servlet" class="btn btn-outline-secondary btn-sm me-1" target="_blank" rel="noopener noreferrer"><i class="fas fa-book" aria-hidden="true"></i> Reference Guide</a>
  <a href="https://github.com/weld/core/tree/main/examples/jsf/numberguess" class="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer"><i class="fas fa-code" aria-hidden="true"></i> JSF Numberguess Example</a>
</div>

## <i class="fas fa-laptop-code" aria-hidden="true"></i> Java SE

Use CDI in standalone Java SE applications. You'll also need the
[CDI API](https://central.sonatype.com/search?q=g%3Ajakarta.cdi++a%3Ajakarta.cdi-api) on your classpath.

<div class="row g-3 mb-3">
  <div class="col-md-6">
    <div class="get-started-dep-label">Shaded (recommended)</div>
    <pre><code>&lt;dependency&gt;
  &lt;groupId&gt;org.jboss.weld.se&lt;/groupId&gt;
  &lt;artifactId&gt;weld-se-shaded&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>
  </div>
  <div class="col-md-6">
    <div class="get-started-dep-label">Core</div>
    <pre><code>&lt;dependency&gt;
  &lt;groupId&gt;org.jboss.weld.se&lt;/groupId&gt;
  &lt;artifactId&gt;weld-se-core&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>
  </div>
</div>

<div class="mb-3">
  <a href="https://docs.jboss.org/weld/reference/latest/en-US/html_single/#weld-se" class="btn btn-outline-secondary btn-sm me-1" target="_blank" rel="noopener noreferrer"><i class="fas fa-book" aria-hidden="true"></i> Reference Guide</a>
  <a href="https://github.com/weld/core/tree/main/examples/se/numberguess" class="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer"><i class="fas fa-code" aria-hidden="true"></i> SE Numberguess Example</a>
</div>

## <i class="fas fa-flask" aria-hidden="true"></i> Testing

Test CDI applications with real injection — no mocking required.
Weld Testing provides extensions for JUnit 5, JUnit 4, and Spock.

<div class="mb-3">
  <a href="https://github.com/weld/weld-testing" class="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-github" aria-hidden="true"></i> weld-testing on GitHub <i class="fas fa-external-link-alt" aria-hidden="true"></i>
  </a>
</div>

<div class="get-started-osgi-callout">
  <strong>OSGi:</strong> Running in an OSGi environment? Weld provides an OSGi bundle — see
  <a href="https://central.sonatype.com/search?q=g:org.jboss.weld%20%20a:weld-osgi-bundle" target="_blank" rel="noopener noreferrer">weld-osgi-bundle</a>
  on Maven Central.
</div>
