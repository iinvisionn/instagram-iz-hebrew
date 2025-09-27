export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Handle Hebrew RTL smooth scrolling for navigation
export const handleNavClick = (href: string) => {
  if (href.startsWith('#')) {
    const elementId = href.substring(1);
    smoothScrollTo(elementId);
  }
};