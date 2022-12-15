import React from 'react';
import ReactDOM from 'react-dom/client';
import EditorPage from './components/EditorPage/EditorPage';
import TextEditor from './components/TextEditor/TextEditor';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EditorPage />
    <TextEditor />
  </React.StrictMode>
);
