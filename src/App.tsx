import { useState, useMemo } from 'react';
import { Search, Code2, Sparkles } from 'lucide-react';
import ComponentCard from './components/ComponentCard';
import { components } from './data/components';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const categoryMap = new Map<string, number>();
    categoryMap.set('All', components.length);
    
    components.forEach(comp => {
      categoryMap.set(comp.category, (categoryMap.get(comp.category) || 0) + 1);
    });
    
    return Array.from(categoryMap.entries()).map(([name, count]) => ({ name, count }));
  }, []);

  const filteredComponents = useMemo(() => {
    return components.filter(comp => {
      const matchesSearch = comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          comp.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || comp.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Sparkles size={32} />
            <h1>UI Component Library</h1>
          </div>
          <p className="subtitle">
            <Code2 size={16} />
            {components.length}+ Interactive UI Elements & Components
          </p>
        </div>
      </header>

      <div className="container">
        <div className="controls">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="categories">
            {categories.map(cat => (
              <button
                key={cat.name}
                className={`category-btn ${selectedCategory === cat.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                {cat.name} <span className="count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="results-info">
          Showing {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''}
        </div>

        <div className="components-grid">
          {filteredComponents.map(comp => (
            <ComponentCard key={comp.id} component={comp} />
          ))}
        </div>

        {filteredComponents.length === 0 && (
          <div className="no-results">
            <Search size={48} />
            <h3>No components found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
