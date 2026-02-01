export interface UIComponent {
  id: string;
  title: string;
  category: string;
  theme?: string; // e.g., 'Modern', 'Glassmorphism', 'Brutalism'
  description: string;
  code: string;
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'react';
  component: React.ComponentType;
}

export interface Category {
  name: string;
  count: number;
}
