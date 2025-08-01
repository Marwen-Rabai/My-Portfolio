"use client";

import { useEffect } from 'react';

export default function RemoveNextDevElements() {
  useEffect(() => {
    const removeNextElements = () => {
      // Remove by exact SVG attributes
      const svgs = document.querySelectorAll('svg');
      svgs.forEach(svg => {
        const hasNextData = svg.hasAttribute('data-next-mark-loading');
        const isNextSize = svg.getAttribute('width') === '40' && svg.getAttribute('height') === '40';
        const isNextViewBox = svg.getAttribute('viewBox') === '0 0 40 40';
        const hasNextLogo = svg.innerHTML.includes('next_logo');
        
        if (hasNextData || isNextSize || isNextViewBox || hasNextLogo) {
          svg.remove();
        }
      });

      // Remove by data attribute
      document.querySelectorAll('[data-next-mark-loading]').forEach(el => el.remove());
    };

    // Run immediately
    removeNextElements();

    // Run every 50ms aggressively
    const interval = setInterval(removeNextElements, 50);

    // MutationObserver for new elements
    const observer = new MutationObserver(removeNextElements);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return null;
}






