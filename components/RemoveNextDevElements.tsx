"use client";

import { useEffect } from 'react';

export default function RemoveNextDevElements() {
  useEffect(() => {
    // Disable Next.js development overlay completely
    if (typeof window !== 'undefined') {
      // Override Next.js development overlay
      window.__NEXT_DATA__ = window.__NEXT_DATA__ || {};
      
      // Disable development mode indicators
      Object.defineProperty(window, '__NEXT_DISABLE_OVERLAY', {
        value: true,
        writable: false
      });
    }

    const removeNextElements = () => {
      try {
        // Remove Next.js development SVGs with multiple selectors
        const selectors = [
          'svg[data-next-mark-loading]',
          'svg[data-next-mark-loading="false"]',
          'svg[data-next-mark-loading="true"]',
          'svg[width="40"][height="40"]',
          'svg[viewBox="0 0 40 40"]',
          '[data-next-mark-loading]',
          '[data-nextjs-data-overlay]',
          '[data-nextjs-error-overlay]',
          '.vercel-live-feedback',
          '.next-dev-overlay',
          'nextjs-portal',
          '[data-overlay-portal]'
        ];

        selectors.forEach(selector => {
          document.querySelectorAll(selector).forEach(el => {
            if (el && el.parentNode) {
              el.parentNode.removeChild(el);
            }
          });
        });

        // Remove SVGs containing Next.js logo paths
        const svgs = document.querySelectorAll('svg');
        svgs.forEach(svg => {
          const innerHTML = svg.innerHTML || '';
          const hasNextLogo = innerHTML.includes('next_logo') || 
                             innerHTML.includes('linearGradient') ||
                             innerHTML.includes('stroke-dasharray');
          
          const hasNextAttributes = svg.hasAttribute('data-next-mark-loading') ||
                                   (svg.getAttribute('width') === '40' && svg.getAttribute('height') === '40') ||
                                   svg.getAttribute('viewBox') === '0 0 40 40';
          
          if (hasNextLogo || hasNextAttributes) {
            if (svg.parentNode) {
              svg.parentNode.removeChild(svg);
            }
          }
        });

        // Remove any development overlays
        const overlays = document.querySelectorAll('[class*="overlay"], [id*="overlay"], [class*="next"], [id*="next"]');
        overlays.forEach(overlay => {
          const classList = overlay.className || '';
          const id = overlay.id || '';
          if (classList.includes('dev') || classList.includes('error') || 
              id.includes('dev') || id.includes('error') ||
              classList.includes('nextjs') || id.includes('nextjs')) {
            if (overlay.parentNode) {
              overlay.parentNode.removeChild(overlay);
            }
          }
        });

      } catch (error) {
        // Silently handle any errors during removal
        console.debug('Next.js element removal completed');
      }
    };

    // Run immediately and aggressively
    removeNextElements();
    setTimeout(removeNextElements, 0);
    setTimeout(removeNextElements, 100);

    // Run every 25ms for maximum coverage
    const interval = setInterval(removeNextElements, 25);

    // Enhanced MutationObserver
    const observer = new MutationObserver((mutations) => {
      let shouldRemove = false;
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const element = node as Element;
              if (element.tagName === 'SVG' || 
                  element.hasAttribute('data-next-mark-loading') ||
                  element.className?.includes('overlay') ||
                  element.id?.includes('next')) {
                shouldRemove = true;
              }
            }
          });
        }
      });
      
      if (shouldRemove) {
        setTimeout(removeNextElements, 0);
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-next-mark-loading', 'class', 'id']
    });

    // Additional cleanup on page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', removeNextElements);
    } else {
      removeNextElements();
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
      document.removeEventListener('DOMContentLoaded', removeNextElements);
    };
  }, []);

  return null;
}






