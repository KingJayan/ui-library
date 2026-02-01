import { useState, useMemo } from 'react';
import { Search, Code2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ComponentCard from './components/ComponentCard';
import { components } from './data/components';
import './App.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
} as const;

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
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="header"
      >
        <div className="header-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles size={32} />
            <h1>UI Component Library</h1>
          </motion.div>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Code2 size={16} />
            {components.length}+ Interactive UI Elements & Components
          </motion.p>
        </div>
      </motion.header>

      <div className="container">
        <motion.div
          className="controls"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
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
            {categories.map((cat, index) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`category-btn ${selectedCategory === cat.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                {cat.name} <span className="count">{cat.count}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="results-info"
        >
          Showing {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''}
        </motion.div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="components-grid"
        >
          <AnimatePresence mode='popLayout'>
            {filteredComponents.map(comp => (
              <motion.div
                key={comp.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <ComponentCard component={comp} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredComponents.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="no-results"
          >
            <Search size={48} />
            <h3>No components found</h3>
            <p>Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
