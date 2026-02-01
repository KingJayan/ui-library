import { useState } from 'react';
import { Copy, Check, Eye, Code } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion, AnimatePresence } from 'framer-motion';
import { UIComponent } from '../types';
import './ComponentCard.css';

interface ComponentCardProps {
  component: UIComponent;
}

function ComponentCard({ component }: ComponentCardProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="component-card"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="card-header">
        <div>
          <h3>{component.title}</h3>
          <p className="description">{component.description}</p>
        </div>
        <motion.span
          className="category-badge"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {component.category}
        </motion.span>
      </div>

      <div className="card-content">
        <div className="preview-section">
          <div className="preview-box">
            <component.component />
          </div>
        </div>

        <div className="card-actions">
          <button
            className={`action-btn ${!showCode ? 'active' : ''}`}
            onClick={() => setShowCode(false)}
          >
            <Eye size={16} />
            Preview
          </button>
          <button
            className={`action-btn ${showCode ? 'active' : ''}`}
            onClick={() => setShowCode(true)}
          >
            <Code size={16} />
            Code
          </button>
          <motion.button
            className="action-btn copy-btn"
            onClick={handleCopy}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={copied ? 'check' : 'copy'}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy'}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {showCode && (
            <motion.div
              className="code-section"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <SyntaxHighlighter
                language={component.language}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  maxHeight: '300px'
                }}
              >
                {component.code}
              </SyntaxHighlighter>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default ComponentCard;
