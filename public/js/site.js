/**
 * Weld Site JavaScript
 * Main JavaScript file containing theme switcher, navigation, and interactive features
 */

/**
 * Theme Switcher
 * Toggles between light and dark modes using Bootstrap's data-bs-theme
 */
(function() {
  'use strict';

  // Get stored theme or default to light
  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = theme => localStorage.setItem('theme', theme);

  // Get preferred theme (stored or system preference)
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Apply theme to document
  const setTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    updateToggleButton(theme);
  };

  // Update the toggle button icon and text
  const updateToggleButton = theme => {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    const icon = toggleBtn.querySelector('i');
    const text = toggleBtn.querySelector('.theme-toggle-text');

    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
      if (text) text.textContent = 'Light';
    } else {
      icon.className = 'fas fa-moon';
      if (text) text.textContent = 'Dark';
    }
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setStoredTheme(newTheme);
    setTheme(newTheme);
  };

  // Initialize theme on page load
  document.addEventListener('DOMContentLoaded', () => {
    setTheme(getPreferredTheme());

    // Add click handler to toggle button
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const storedTheme = getStoredTheme();
    if (!storedTheme) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Expose toggle function globally if needed
  window.toggleTheme = toggleTheme;
})();

/**
 * Mobile Navigation Toggle
 * Handles hamburger menu collapse on mobile devices
 */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (toggler && navbarCollapse) {
      toggler.addEventListener('click', () => {
        const isExpanded = toggler.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
          navbarCollapse.classList.remove('show');
          toggler.setAttribute('aria-expanded', 'false');
        } else {
          navbarCollapse.classList.add('show');
          toggler.setAttribute('aria-expanded', 'true');
        }
      });

      // Close menu when clicking a link (mobile)
      const navLinks = navbarCollapse.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            navbarCollapse.classList.remove('show');
            toggler.setAttribute('aria-expanded', 'false');
          }
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          if (!toggler.contains(e.target) && !navbarCollapse.contains(e.target)) {
            navbarCollapse.classList.remove('show');
            toggler.setAttribute('aria-expanded', 'false');
          }
        }
      });
    }
  });
})();

/**
 * Active Navigation Highlighting
 * Highlights the current navigation item based on the URL
 */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('#proj_nav [data-nav]');

    navItems.forEach(item => {
      const section = item.getAttribute('data-nav');
      item.classList.remove('current');

      // Check if current path matches this nav item
      if (section === 'overview' && (currentPath === '/' || currentPath === '/index.html')) {
        item.classList.add('current');
      } else if (section === 'news' && (currentPath.startsWith('/news') || currentPath.startsWith('/posts'))) {
        item.classList.add('current');
      } else if (section === 'download' && currentPath.startsWith('/download')) {
        item.classList.add('current');
      } else if (section === 'documentation' && currentPath.startsWith('/documentation')) {
        item.classList.add('current');
      } else if (section === 'contribute' && currentPath.startsWith('/contribute')) {
        item.classList.add('current');
      }
    });
  });
})();

/**
 * FAQ Deep Links
 * Opens and scrolls to a specific FAQ accordion item when the URL contains a hash
 * e.g. /documentation#faq3 will open and scroll to the third FAQ
 * Also adds a permalink icon to each FAQ header for easy link sharing.
 */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // Add permalink icons to each FAQ accordion header
    const accordion = document.querySelector('.doc-accordion');
    if (accordion) {
      accordion.querySelectorAll('.accordion-item').forEach(item => {
        const collapseEl = item.querySelector('.accordion-collapse');
        if (!collapseEl || !collapseEl.id) return;

        const header = item.querySelector('.accordion-header');
        if (!header) return;

        header.style.position = 'relative';

        const link = document.createElement('a');
        link.href = '#' + collapseEl.id;
        link.className = 'faq-permalink';
        link.title = 'Copy link to this FAQ';
        link.innerHTML = '<i class="fas fa-link"></i>';
        link.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const url = window.location.origin + window.location.pathname + '#' + collapseEl.id;
          if (!navigator.clipboard) return;
          navigator.clipboard.writeText(url).then(() => {
            link.title = 'Copied!';
            link.classList.add('faq-permalink-copied');
            setTimeout(() => {
              link.title = 'Copy link to this FAQ';
              link.classList.remove('faq-permalink-copied');
            }, 2000);
          }).catch(() => {});
        });
        header.appendChild(link);
      });
    }

    // Open and scroll to FAQ if URL has a hash
    const hash = window.location.hash;
    if (!hash) return;

    let target;
    try { target = document.querySelector(hash); } catch (e) { return; }
    if (!target || !target.classList.contains('accordion-collapse')) return;

    if (typeof bootstrap === 'undefined' || !bootstrap.Collapse) return;
    const bsCollapse = new bootstrap.Collapse(target, { toggle: false });
    bsCollapse.show();

    const accordionItem = target.closest('.accordion-item');
    target.addEventListener('shown.bs.collapse', () => {
      const el = accordionItem || target;
      const navbar = document.querySelector('#top_subnav_branding');
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const projNav = document.querySelector('#proj_nav');
      const projNavHeight = projNav ? projNav.offsetHeight : 0;
      const offset = navHeight + projNavHeight + 16;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, { once: true });
  });
})();

/**
 * Clickable News Cards
 * Makes entire news/blog cards clickable while maintaining link accessibility
 */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // Select all news/blog cards
    const cards = document.querySelectorAll('.news-list-blocks .card, .blog-post-card');

    cards.forEach(card => {
      // Find the main link (either in title or "Read More")
      const link = card.querySelector('.card-title a, .post-title a, a[href*="/posts/"]');

      if (link) {
        // Make the card clickable
        card.style.cursor = 'pointer';

        card.addEventListener('click', (e) => {
          // Don't trigger if clicking on an actual link (let the link handle it)
          if (e.target.tagName === 'A') {
            return;
          }

          // Respect modifier keys (cmd/ctrl click for new tab, etc.)
          if (e.metaKey || e.ctrlKey) {
            window.open(link.href, '_blank');
          } else {
            window.location.href = link.href;
          }
        });

        // Improve accessibility - make cards keyboard navigable
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');

        // Handle keyboard navigation (Enter key)
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            if (e.metaKey || e.ctrlKey) {
              window.open(link.href, '_blank');
            } else {
              window.location.href = link.href;
            }
          }
        });
      }
    });
  });
})();
