# ESAG React Project File Structure

## ?? Project Overview
This project implements an accessible website for Escola Secundária Almeida Garrett (ESAG) following WCAG 2.2 guidelines, Nielsen's heuristics, and Norman's design principles.

## ?? Directory Structure

```
src/
??? components/
?   ??? accessibility/          # Accessibility-specific components
?   ?   ??? AccessibilityControls.jsx  # High contrast, text size controls
?   ?   ??? SkipLink.jsx               # Skip to main content link
?   ?   ??? StatusMessage.jsx          # Announcements for screen readers
?   ??? layout/                 # Layout components
?   ?   ??? Header.jsx                 # Site header with logo and controls
?   ?   ??? Navigation.jsx             # Main navigation menu
?   ?   ??? Footer.jsx                 # Site footer
?   ?   ??? Layout.jsx                 # Main layout wrapper
?   ??? ui/                     # Reusable UI components
?   ?   ??? Card.jsx                   # Accessible card component
?   ?   ??? Button.jsx                 # Accessible button component
?   ?   ??? NewsItem.jsx               # News article component
?   ??? pages/                  # Page components
?       ??? Home.jsx                   # Homepage component
?       ??? index.js                   # Page exports
??? hooks/                      # Custom React hooks
?   ??? useAccessibility.js            # Accessibility state management
?   ??? useKeyboardNavigation.js       # Keyboard navigation logic
?   ??? useFocusManagement.js          # Focus management utilities
??? styles/                     # CSS files
?   ??? globals.css                    # Global styles and CSS variables
?   ??? accessibility.css             # Accessibility-specific styles
?   ??? components.css                 # Component-specific styles
??? utils/                      # Utility functions
?   ??? accessibility.js              # Accessibility helper functions
?   ??? constants.js                   # App constants
??? tests/                      # Test files
    ??? accessibility.test.js         # Accessibility tests
    ??? components.test.js             # Component tests
```

## ?? Key Features

### ? Accessibility Features
- WCAG 2.2 AA compliance
- Screen reader support
- Keyboard navigation
- Focus management
- High contrast mode
- Scalable text
- Semantic HTML

### ?? Design Principles
- Nielsen's 10 Usability Heuristics
- Norman's Design Principles
- Mobile-first responsive design
- Performance optimized

### ?? Testing
- Automated accessibility testing
- Component testing
- Performance monitoring

## ?? Next Steps

1. **Copy component content** from the integration guide
2. **Paste into respective files** in the structure above
3. **Test accessibility** with `npm run test:a11y`
4. **Run development server** with `npm start`
5. **Build for production** with `npm run build`

## ?? Implementation Guide

Each file in this structure corresponds to components detailed in the React Integration Guide. Copy the provided code into each file according to the file path structure above.

### Priority Order for Implementation:
1. `src/styles/globals.css` - Base styles and CSS variables
2. `src/hooks/useAccessibility.js` - Core accessibility hook
3. `src/hooks/useKeyboardNavigation.js` - Keyboard navigation
4. `src/components/accessibility/*` - Accessibility components
5. `src/components/layout/*` - Layout components
6. `src/components/pages/Home.jsx` - Homepage
7. `src/tests/accessibility.test.js` - Testing setup

## ?? Commands

- `npm start` - Start development server
- `npm test` - Run tests
- `npm run test:a11y` - Run accessibility tests
- `npm run build` - Build for production
- `npm run build:analyze` - Build and analyze bundle
