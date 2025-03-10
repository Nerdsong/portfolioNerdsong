// utils/scrollService.js
// A simple service to manage scrolling between sections

// Store for element references
const elementRefs = {};

// Register an element reference
export const registerRef = (id, ref) => {
  elementRefs[id] = ref;
};

// Scroll to an element by id
export const scrollToSection = (id) => {
  const element = elementRefs[id];
  if (element && element.current) {
    element.current.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Element with id "${id}" not found or not yet registered.`);
  }
};