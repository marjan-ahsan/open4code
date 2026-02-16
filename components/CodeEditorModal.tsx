import React, { useState, useEffect, useCallback } from 'react';
import { FaPlay, FaTimes, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { CodeExample } from '../types';

interface CodeEditorModalProps {
  initialCode: CodeExample;
  onClose: () => void;
}

type EditorTab = 'html' | 'css' | 'js';

const CodeEditorModal: React.FC<CodeEditorModalProps> = ({ initialCode, onClose }) => {
  const [html, setHtml] = useState(initialCode.html || '');
  const [css, setCss] = useState(initialCode.css || '');
  const [js, setJs] = useState(initialCode.js || '');
  const [activeTab, setActiveTab] = useState<EditorTab>('html');

  const [iframeContent, setIframeContent] = useState('');

  const generateIframeContent = useCallback(() => {
    return `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
  }, [html, css, js]);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIframeContent(generateIframeContent());
    }, 300); // Debounce update
    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [html, css, js, generateIframeContent]);


  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const renderEditor = () => {
    switch (activeTab) {
      case 'html':
        return <textarea value={html} onChange={(e) => setHtml(e.target.value)} className="editor-textarea" spellCheck="false" />;
      case 'css':
        return <textarea value={css} onChange={(e) => setCss(e.target.value)} className="editor-textarea" spellCheck="false" />;
      case 'js':
        return <textarea value={js} onChange={(e) => setJs(e.target.value)} className="editor-textarea" spellCheck="false" />;
      default:
        return null;
    }
  }

  const TabButton: React.FC<{tab: EditorTab, icon: React.ReactElement, label: string}> = ({tab, icon, label}) => (
     <button 
        onClick={() => setActiveTab(tab)}
        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-t-lg transition-colors ${activeTab === tab ? 'bg-stone-100 dark:bg-[#1A1A2E] text-stone-800 dark:text-white' : 'bg-transparent text-gray-400 hover:bg-black/5 dark:hover:bg-white/5'}`}
     >
        {icon} {label}
    </button>
  );

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-stone-200/80 dark:bg-[#10101d]/80 border border-stone-300 dark:border-white/20 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-stone-300 dark:border-white/10">
          <h2 className="font-heading text-xl font-bold text-stone-800 dark:text-white">Interactive Code Editor</h2>
          <button onClick={onClose} className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-2xl">
              <FaTimes />
          </button>
        </div>

        {/* Editor and Preview Panes */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-300 dark:bg-white/10 h-full overflow-hidden md:h-auto">
          {/* Code Editor */}
          <div className="bg-stone-100 dark:bg-[#1A1A2E] h-full flex flex-col min-h-[200px] md:min-h-0">
            <div className="flex border-b border-stone-300 dark:border-white/10 px-2">
                <TabButton tab="html" icon={<FaHtml5 className="text-[#E16A54]"/>} label="HTML" />
                <TabButton tab="css" icon={<FaCss3Alt className="text-[#2A4C7C]"/>} label="CSS" />
                <TabButton tab="js" icon={<FaJs className="text-[#F4D35E]"/>} label="JS" />
            </div>
            <div className="flex-grow p-2">
                {renderEditor()}
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white h-full min-h-[200px] md:min-h-0">
            <iframe
              srcDoc={iframeContent}
              title="Code Preview"
              className="w-full h-full border-none"
              sandbox="allow-scripts"
            />
          </div>
        </div>
      </div>
       <style>{`
        .editor-textarea {
            width: 100%;
            height: 100%;
            background: transparent;
            font-family: "JetBrains Mono", monospace;
            font-size: 14px;
            resize: none;
            border: none;
            outline: none;
            line-height: 1.5;
            color: #292524;
        }
        .dark .editor-textarea {
          color: #e0e0e0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default CodeEditorModal;