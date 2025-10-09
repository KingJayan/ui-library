import { useState } from 'react';
import { Copy, Check, Eye, Code } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
    <div className="component-card">
      <div className="card-header">
        <div>
          <h3>{component.title}</h3>
          <p className="description">{component.description}</p>
        </div>
        <span className="category-badge">{component.category}</span>
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
          <button 
            className="action-btn copy-btn"
            onClick={handleCopy}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {showCode && (
          <div className="code-section">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default ComponentCard;
