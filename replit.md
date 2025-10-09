# UI Component Library

## Overview

This is a React-based UI Component Library showcasing 151 interactive UI elements and components. The application serves as a living catalog of reusable UI components with live previews and code snippets. Users can browse, search, filter components by category, and copy code snippets for use in their own projects. The library emphasizes modern design patterns with smooth animations, glassmorphism effects, and responsive layouts.

**Component Categories:**
Buttons (20), Icon Buttons (5), Button Sizes (3), State Buttons (4), Pill Buttons (3), 3D Buttons (3), Special Effects (16), Inputs (7), Checkboxes (5), Radio Buttons (3), Badges (11), Loaders (10), Cards (6), Progress (5), Alerts (5), Tooltips (2), Animations (8), Skeletons (5), Chips (6), Tabs (3), Dividers (5), Avatars (5), Dropdowns (2), Breadcrumbs (2), Pagination (2), Accordion (1), Button Groups (1), Rating (1), Stepper (1), Timeline (1)

**Inspiration Sources:** Material-UI, CodePen showcases, uiverse.io, and mui.com

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 6.0.1
- **Styling:** Vanilla CSS with CSS custom properties (CSS variables)
- **Icons:** Lucide React (v0.263.1)
- **Code Display:** React Syntax Highlighter with Prism

**Rationale:** Vite provides extremely fast development server and build times compared to traditional bundlers. TypeScript ensures type safety and better developer experience. Vanilla CSS was chosen over CSS-in-JS or utility frameworks to maintain simplicity and demonstrate pure CSS techniques for UI components.

**Component Structure:**
- Modular component architecture with separate CSS files
- Component data separated from presentation logic
- Type-safe component definitions using TypeScript interfaces

**Key Design Patterns:**
- **Component Catalog Pattern:** Main App component acts as a showcase/gallery for individual UI components
- **Render Props/Component Composition:** Each catalog entry contains a React component that renders the demo
- **Search and Filter:** Client-side filtering using React hooks (useState, useMemo) for performance
- **Code Display Toggle:** Components show both live preview and source code

### State Management

**Local State Only:**
- Uses React hooks (useState, useMemo) for all state management
- No global state management library needed
- State includes: search query, selected category, code visibility, copy status

**Rationale:** The application's state is simple and localized - no need for complex state management solutions like Redux or Context API. Using built-in React hooks keeps the bundle size small and code straightforward.

### Styling Architecture

**CSS Custom Properties (Variables):**
- Dark theme by default with centralized color system
- Variables defined in `:root` for consistent theming
- Modular CSS files per component/feature area

**Naming Convention:**
- BEM-inspired class naming for clarity
- Semantic variable names (--bg-primary, --text-secondary, etc.)

**Animation Strategy:**
- CSS transitions and animations for all interactive effects
- No JavaScript-based animations to maintain performance
- Hover effects, pulses, glows, and transformations defined in CSS

**Rationale:** CSS custom properties provide easy theming and consistency. Vanilla CSS keeps the architecture simple and allows developers to easily understand and modify styles without learning a CSS framework.

### Code Organization

**Directory Structure:**
```
src/
├── components/        # Reusable UI components (ComponentCard)
├── data/             # Component definitions and catalog data
├── styles/           # Shared component styles
├── types.ts          # TypeScript interfaces
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

**Component Data Pattern:**
- Components are defined as React functional components
- Each component entry includes: id, title, category, description, code snippet, language, and renderable component
- Separation allows easy addition of new components to the catalog

### Development Server Configuration

**Vite Server Settings:**
- Host: 0.0.0.0 (allows external connections)
- Port: 5000
- Allowed hosts: true (for Replit/cloud environments)

**Rationale:** Configuration optimized for cloud-based development environments like Replit, allowing the app to be accessible from any host.

## External Dependencies

### UI Libraries
- **lucide-react (v0.263.1):** Icon library for modern, customizable SVG icons. Used for UI elements like search, code, sparkles icons throughout the interface.

### Code Display
- **react-syntax-highlighter (v15.5.0):** Syntax highlighting for code snippets. Uses Prism with VS Code Dark Plus theme to display component source code with proper formatting and highlighting.

### Development Dependencies
- **@vitejs/plugin-react (v4.3.4):** Official Vite plugin for React with Fast Refresh support
- **TypeScript (v5.6.3):** Type checking and enhanced IDE support
- **Type Definitions:** @types/react, @types/react-dom, @types/react-syntax-highlighter for TypeScript compatibility

### Font Resources
- **Google Fonts:**
  - Inter: Primary UI font (weights 300-900)
  - Fira Code: Monospace font for code display (weights 300-700)

**Rationale:** Minimal external dependencies keep the bundle size small and reduce maintenance overhead. Only essential libraries are included - icons, syntax highlighting, and build tooling.

### No Backend/Database
This is a purely frontend application with no backend services, databases, or APIs. All component data is statically defined in TypeScript/TSX files. This architectural decision keeps deployment simple and ensures the application works entirely client-side.