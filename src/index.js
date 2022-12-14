import React from 'react';
import ReactDOM from 'react-dom/client';
import EditorPage from './components/EditorPage/EditorPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EditorPage />
  </React.StrictMode>
);
