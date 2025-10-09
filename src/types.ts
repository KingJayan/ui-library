export interface UIComponent {
  id: string;
  title: string;
  category: string;
  description: string;
  code: string;
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'react';
  component: React.ComponentType;
}

export interface Category {
  name: string;
  count: number;
}
